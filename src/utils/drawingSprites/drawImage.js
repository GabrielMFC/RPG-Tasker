import { supabaseClient } from "../API/supabaseAPI";
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

  #loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('Erro ao carregar a imagem.'));
      img.src = src;
    })
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
