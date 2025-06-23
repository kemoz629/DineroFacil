import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route } from "react-router-dom";
// import LoginForm from "./pages/LoginForm.tsx";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // its already rendering the h1 just fyi
  <StrictMode>
    {/* <Routes> */}
    <App />
    {/* <Route path='/login' element={'<LoginForm/>'}/> */}
    {/* </Routes> */}
  </StrictMode>,
)
