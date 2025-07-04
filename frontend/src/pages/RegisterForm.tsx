import React, { useState } from "react";

const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      userName,
      email,
      password,
      confirmPassword, // lo dejo asi por ahora para no meterme mucho en la llamada pal backend
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="title text-4xl m-10">Create an account</h1>
      <div className="p-4 rounded-lg bg-white w-1/4">
        <h1 className="mb-6 text-center text-2xl font-semibold">
          Enter details:
        </h1>
        <form action="" className="p-4" onSubmit={handleSumbit}>
          <div className="p-2">
            <label htmlFor="userName" className="p-4">
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
            <label htmlFor="email" className="p-8">
              Email:
            </label>
            <input
              className="shadow-md"
              type="text"
              value={email}
              placeholder="eduardo@maidana"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-2">
            <label htmlFor="password" className="p-4">
              Password:
            </label>
            <input
              className="shadow-md"
              type="password"
              value={password}
              placeholder="***********"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div className="p-2">
            <label htmlFor="confirmPassword" className="p-2">
              Confirm Password:
            </label>
            <input
              className="shadow-md ml-1"
              type="password"
              value={confirmPassword}
              placeholder=""
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="w-2/3 rounded-md mx-auto bg-blue-200 p-1 font-bold hover:bg-blue-400"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
