import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_API_KEY
const supabaseClient = createClient(supabaseUrl, supabaseKey)

const UserService = {
    insertUser : async function insertUser(name,password) {
    const {user} = authUser()
    const {error: dbError} = await supabaseClient
        .from('users')
        .insert([{name: name,user_password:password}])

        if(dbError) {
            console.error(dbError)
        }
    }
}

async function authUser(){
    const {data:authData, error:authError} = await supabaseClient.auth.signUp({
    email:"ggezcom991gh@gmail.com", 
    password: "MinhaSenha"
    })

    if(authError) {
    console.log(authError)
    return
    }

    return authData
}

export {UserService, supabaseClient}