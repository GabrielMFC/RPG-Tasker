class Cache{
    #cache = new Map()
    async preloadSprites(spriteMap) {
        const entries = Object.entries(spriteMap)

        await Promise.all(entries.map(([name, url]) => {
            return new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = () => {
            this.#cache.set(name, img)
            resolve()
        }
            img.onerror = reject
            img.src = url
        })
        }))
    }

    set(name, img) {
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
}

const currentCache = new Cache()

export default currentCache