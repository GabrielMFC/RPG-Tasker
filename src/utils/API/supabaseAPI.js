import { createClient } from '@supabase/supabase-js'

const supabaseClient = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_API_KEY)

class UserService {
    async registerUser({name, email, password}) {
        const { data: authData, error: authError } = await this.#authUser({ email, password })
        if (authError) return { error: authError }

        const { data: insertData, error: insertError } = await this.#insertUser({ name })
        if (insertError) return { error: insertError }

        return { data: { authData, insertData }, error: null }
    }
    
    async #authUser({email, password}) {
        try {
                const {data, error} = await supabaseClient.auth.signUp({
                email: email, 
                password: password
            })
            return {data, error}
        } catch (error) {
            console.error(error);
            return {data: null, error}
        }
    }

    async #insertUser({name}) {
        try {
            const {data, error} = await supabaseClient.from('users').insert([
            {name: name}
        ])
        return {data, error}
        } catch (error) {
            console.error(error)
            return {data: null, error}
        }
    }
}

export {UserService}