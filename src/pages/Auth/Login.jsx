import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const navigate = useNavigate();

  // Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();
  };


  return (
    <div className="w-[90vw] md:w-[33vw] p-7 flex flex-col justify-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back 👋</h3>
      <p className="text-sm text-gray-600 mb-6">
        Please enter your details to log in.
      </p>

      <form onSubmit={handleLogin}>
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder="Rahul@gmail.com"
          type="text"
        />

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Min 8 Characters"
          type="password"
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition cursor-pointer"
        >
          LOGIN
        </button>
        <p className="text-12px text-pink-700 mt-4 text-center">
          Don't have an account?{" "}
          <button
            type="button"
            className="text-blue-600 underline cursor-pointer"
            onClick={() => setCurrentPage("signup")}
          >
            SignUp
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login