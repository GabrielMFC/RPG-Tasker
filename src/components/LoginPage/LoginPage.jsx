export default function LoginPage() {
    return(
        <div>
            <h1>Login Page</h1>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}