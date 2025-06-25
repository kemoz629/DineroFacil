import './App.css'
import LoginForm from "./pages/LoginForm.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <h1>Bienvenido a Money Facil</h1>
     {/* esto lo voy a cambiar Manu, por ahora lo dejo ahi */}
      <LoginForm/>
    <Routes>
     <Route path='/login' element={<LoginForm/>}/>
      </Routes>
    </>
  )
}

export default App
