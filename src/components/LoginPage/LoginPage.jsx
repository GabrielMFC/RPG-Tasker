import { useState } from "react"
import {UserService} from "../../utils/API/supabaseAPI"
import "./index.css"

export default function LoginPage() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [haveAccount, setHaveAccount] = useState(true)

    const register = async () => {
        try {
            const user = new UserService()
            const {error} = await user.registerUser({name: userName, password: password})

            if (error) {
                console.error("Erro Supabase:", error.message)
                return
            }

        } catch (error) {
            console.error(error)
            return {data: null, error}
        }
    }

    const login = async () => {
        try{
            const user = new UserService()
            const {error} = await user.login({name: userName, password: password})

            if(error) {
                console.error("Erro Supabase:", error.message)
                return
            }
        } catch (err){
            console.error(err)
            return {data:null, error: err}
        }
    }

    return (
        <div id="container">
                <h1>RPG Tasker</h1>
                <form id="loginForm" onClick={(e) => e.preventDefault()}>
                    <input className="userDataInput" type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Nome de usuário..."/>
                    <input className="userDataInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha..." required />

                    {haveAccount ? (<div className="entryButtonContainer"><button type="button" onClick={login}>Entrar</button> <a className="changeEntryPage" onClick={() => setHaveAccount(false)}>Não tem conta?</a></div>) : (<div className="entryButtonContainer"><button type="submit" onClick={register}>Registrar</button> <a className="changeEntryPage" onClick={() => setHaveAccount(true)}>Possui conta?</a></div>)}

                </form>
        </div>
    )
}