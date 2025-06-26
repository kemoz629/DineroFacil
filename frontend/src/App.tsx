import './App.css'
import LoginForm from "./pages/LoginForm.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <LoginForm/>
    <Routes>
     <Route path='/login' element={<LoginForm/>}/>
      </Routes>
    </>
  )
}

export default App
