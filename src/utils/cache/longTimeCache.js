import { openDB } from 'idb'

class LongTimeCache {
  #dbPromise

  constructor() {
    this.#dbPromise = openDB('SpriteCache', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('sprites')) {
          db.createObjectStore('sprites')
        }
      }
    })
  }

  async set(name, blob) {
    const db = await this.#dbPromise
    await db.put('sprites', blob, name)
  }

  async get(name) {
    const db = await this.#dbPromise
    return db.get('sprites', name)
  }

  async clear() {
    const db = await this.#dbPromise
    await db.clear('sprites')
  }
}

const longTimeCacheInstance = new LongTimeCache()

export default longTimeCacheInstance
