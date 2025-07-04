// import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";

const LoginForm = () => {
  // const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setUserPassword] = useState("");

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ userName, password });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="title text-4xl m-10">Welcome du Dinero Facil!</h1>
      <div className="p-4 rounded-lg bg-white w-1/4">
        <h1 className="mb-6 text-center text-2xl font-semibold">
          Enter your credentials:
        </h1>
        <form action="" className="p-4" onSubmit={handleSumbit}>
          <div className="p-2">
            <label htmlFor="userName" className="p-4 font-bold">
              Username:
            </label>
            <input
              className="shadow-md"
              type="text"
              value={userName}
              placeholder="eduardomaidana"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="p-2">
            <label htmlFor="password" className="p-4 font-bold">
              Password:
            </label>
            <input
              className="shadow-md ml-1"
              type="password"
              value={password}
              placeholder="*********"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="w-2/3 rounded-md mx-auto bg-blue-200 p-1 font-bold hover:bg-blue-400"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
        <div>
          <p className="text-center">
            Don't have an account loser?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
