import { useState } from "react"
import {UserService} from "../../utils/API/supabaseAPI"

export default function LoginPage() {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleLogin = async (e) => {
        e.preventDefault()
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) setError(error.message)
        else setError(null)
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Nome de usuário..."/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email..." required />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha..." required />
                <button type="submit">Login</button>
            </form>
            {error && <p style={{color: "red"}}>{error}</p>}
        </div>
    )
}
