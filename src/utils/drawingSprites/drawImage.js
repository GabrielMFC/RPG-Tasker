import { supabaseClient } from "../API/supabaseAPI";
import spriteCache from "../cache/cacheManager";

class DrawSprites {
  async #fetchSpriteURL(spriteURL) {
    const { data, error } = await supabaseClient
      .storage
      .from('sprites')
      .createSignedUrl(spriteURL, 60);

    if (error) {
      console.error('Erro ao gerar URL:', error);
      throw new Error('Erro ao gerar URL');
    }

    return data.signedUrl;
  }

  async #loadImage(url) {
    const name = new URL(url).pathname.split('/').pop()

    spriteCache.get(name)

    const img = await new Promise((resolve, reject) => {
      const i = new Image();
      i.crossOrigin = 'anonymous';
      i.onload = () => resolve(i);
      i.onerror = () => reject(new Error('Erro ao carregar a imagem.'));
      i.src = url;
    })

    spriteCache.set(name, img)
    return img;
  }

  #drawImageOnCanvas(img, canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);
  }

  async displaySprite(spriteURL, canvasId)
  {
    try {
      const url = await this.#fetchSpriteURL(spriteURL);
      const img = await this.#loadImage(url);
      this.#drawImageOnCanvas(img, canvasId);
    } catch (err) {
      console.error(err.message);
    }
  }
}

export default DrawSprites;
