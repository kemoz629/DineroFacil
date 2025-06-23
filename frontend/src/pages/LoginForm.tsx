import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const LoginForm = () => {

    const navigate = useNavigate();
    const [userName,setUserName] = useState('');
    const [password,setUserPassword] = useState('');

return (
    <div className='formContainer text-teal-500'>
        <h1>Enter the credentials</h1>
    <form action="" onSubmit={() => {}}>
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
    </div>
);

}

export default LoginForm;