import { createClient } from '@supabase/supabase-js'
import bcrypt from 'bcryptjs'

const supabaseClient = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_API_KEY)

class UserService {
    async #findUser(name) {
        const { data, error } = await supabaseClient
            .from('users')
            .select('user_id, name, user_password')
            .eq('name', name)
            .single()

        if (error || !data) {
            return { error: 'Usuário não encontrado', data: null }
        }

        return { data, error: null }
    }

    async #validateCredentials(name, password) {
        const { data, error } = await this.#findUser(name)

        if (error) return { error }

        const isValidPassword = await bcrypt.compare(password, data.user_password)

        if (!isValidPassword) {
            return { error: 'Senha incorreta' }
        }

        return { data, error: null }
    }

    async registerUser({ name, password }) {
        const { data, error } = await this.#insertUser({ name, password })
        if (error) return { error }

        return { data }
    }

    async login({ name, password }) {
        const { data, error } = await this.#validateCredentials(name, password)

        if (error) {
            return { error }
        }
        console.log("deu certo");
        
        return { data }
    }

    async #insertUser({name, password}) {
        try {
            const {data, error} = await 
            supabaseClient.from('users').insert([
            {name: name, user_password: await this.#generateHash(password)}  
        ])
        return {data, error}
        } catch (error) {
            console.error(error)
            return {data: null, error}
        }
    }

    async #generateHash(password) {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        return hash
    }
}

export {UserService, supabaseClient}