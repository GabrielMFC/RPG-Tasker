import { useState } from "react"
import {UserService} from "../../utils/API/supabaseAPI"

export default function LoginPage() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerUSer = async (e) => {
        e.preventDefault()
        try {
            const user = new UserService()
            const {error} = await user.registerUser({name: userName, email: email, password: password})

            if (error) {
                console.error("Erro Supabase:", error.message)
                return
            }

        } catch (error) {
            console.error(error);
            return {data: null, error}
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={registerUSer}>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Nome de usuário..."/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email..." required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha..." required />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}