import longTimeCacheInstance from "./longTimeCache";
import shortTimeCacheInstance from "./shortTimeCache";

class SpriteCacheManager {
    #longTimeCache = longTimeCacheInstance
    #shortTimeCache = shortTimeCacheInstance

  async get(name) {
    if (this.#shortTimeCache.has(name)) {
      return this.#shortTimeCache.get(name)
    }

    const blob = await this.#longTimeCache.get(name)
    if (blob) {
        console.log("cache de duração longa");
        
      const img = await this.#blobToImage(blob)
      await this.#shortTimeCache.set(name, img)
      return img
    }

    return null
  }

  async set(name, img) {
    await this.#shortTimeCache.set(name, img)
    await this.#longTimeCache.set(name, await this.#imageToBlob(img))
  }

    #blobToImage(blob) {
    return new Promise((resolve) => {
      const url = URL.createObjectURL(blob)
      const img = new Image()
      img.onload = () => {
        URL.revokeObjectURL(url)
        resolve(img)
      }
      img.src = url
    })
  }

  #imageToBlob(img) {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth || img.width
      canvas.height = img.naturalHeight || img.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      canvas.toBlob(blob => {
        resolve(blob)
      }, 'image/png')
    })
  }
}

const spriteCache = new SpriteCacheManager()

export default spriteCache