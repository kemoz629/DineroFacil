import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const LoginForm = () => {

    const navigate = useNavigate();
    const [userName,setUserName] = useState('');
    const [password,setUserPassword] = useState('');

return (
    <form action="" onSubmit={() => {}}> //le tire unos colores ahi pa que no se queje
    <li>
        <label htmlFor="userName">
            Username:
        </label>
    </li>
    <li>
        <label htmlFor="password">
            Password:
        </label>
    </li>

    </form>
);

}

export default LoginForm;