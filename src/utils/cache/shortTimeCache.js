import longTimeCacheInstance from "./longTimeCache"

class ShortTimeCache {
  #cache = new Map()

  async set(name, img) {
    this.#cache.set(name, img)
  }

    get(name) {
        return this.#cache.get(name)
    }

   has(name) {
    return this.#cache.has(name)
  }

  clear() {
    this.#cache.clear()
  }

  debug() {
    console.log([...this.#cache.keys()])
  }
}

const shortTimeCacheInstance = new ShortTimeCache(longTimeCacheInstance)

export default shortTimeCacheInstance