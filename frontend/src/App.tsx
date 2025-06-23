import './App.css'
import LoginForm from "./pages/LoginForm.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <h1>money facil</h1>
      <LoginForm/>
    <Routes>
     <Route path='/login' element={<LoginForm/>}/>
      </Routes>
    </>
  )
}

export default App
