import ToDoList from "./components/ToDoList/ToDoList"
// import Assets from "./components/TesteDeAssets/assets"
import LoginPage from "./components/LoginPage/LoginPage"
import { UserService } from "./utils/API/supabaseAPI"

function App() {
  // UserService.insertUser("Guilherme","MinhaSenha")
  return (
    <>
      <ToDoList />
      <LoginPage/>
      {/* <Assets filename={'ElfLord.png'}/> */}
    </>
  )
}

export default App