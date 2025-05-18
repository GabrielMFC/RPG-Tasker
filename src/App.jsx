import ToDoList from "./components/ToDoList/ToDoList"
// import Assets from "./components/TesteDeAssets/assets"
import LoginPage from "./components/LoginPage/LoginPage"
import { UserService } from "./utils/API/supabaseAPI"
import ScrollIntro from "./components/LoginPage/scrollIntro/ScrollIntro"
import { useState } from "react"

function App() {
  const[showLoginPage, setShowLoginPage] = useState(false)

return (
  <ScrollIntro/>
)
}

export default App