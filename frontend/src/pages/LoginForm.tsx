// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const LoginForm = () => {

    // const navigate = useNavigate();
    const [userName,setUserName] = useState('');
    const [password,setUserPassword] = useState('');

    const handleSumbit = (e:any) => {
        e.preventDefault();
        console.log({userName, password})
    };

return (
    <div className='formContainer text-black flex items-center justify-center bg-gray-50 w-full max-w-1/4 p-8 rounded-lg shadow-lg'>
        <div className='w-full max-w-sm p-4 rounded-lg'>
              <h1 className="mb-6 text-center text-2xl font-semibold">
        Enter your credentials:
      </h1>
    <form action="" className='p-4' onSubmit={handleSumbit}>
    <div className='p-2'>
        <label htmlFor="userName" className='p-4'>
            Username:
        </label>
        <input type="text" value={userName} placeholder='eduardomaidana' onChange={e => setUserName(e.target.value)}/>
        </div>
    <div className="p-2">
        <label htmlFor="password" className='p-4'>
            Password:
        </label>
        <input type="password" value={password}placeholder='*********' onChange={e => setUserPassword(e.target.value)}/>
    </div>
    <div className='flex justify-center'>
    <button className='w-2/3 rounded-md mx-auto bg-blue-200 p-1 font-semibold hover:bg-blue-400' type='submit'>
        Log In
    </button>
    </div>
    </form>
    </div>
    </div>
);

}

export default LoginForm;