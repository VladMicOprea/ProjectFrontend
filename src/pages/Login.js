// login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        username: username,
        password: password,
      });

      // Manipulează răspunsul după nevoie
      console.log(response.data);

      // Exemplu: Redirecționează utilizatorul după autentificare
      // history.push('/dashboard');
    } catch (error) {
      console.error('Eroare la conectarea la API:', error);

      // Exemplu: Afisează un mesaj de eroare
      // setError('Autentificare eșuată. Verificați credențialele.');
    }
  };

  return (
    <div className='grid h-screen w-full'>
      <div className='bg-login flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
          <h2 className='text-4xl font-bold text-center py-6'>Sportify</h2>
          <div className='flex flex-col py-2'>
            <label>Username</label>
            <input
              className='border p-2'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='flex flex-col py-2'>
            <label>Password</label>
            <input
              className='border p-2'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className='border w-full my-5 py-2 bg-purple-500 hover:bg-purple-300 text-black'
            type='button'
            onClick={handleLogin}
          >
            Sign In
          </button>
          <div className='flex justify-between'>
            <p className='flex items-center'>
              <input className='mr-2' type='checkbox' /> <span className='checkbox-label'>Remember Me</span>
            </p>
            <Link to='/register' className='text-sm font-bold text-purple-500 hover:text-red-300'>
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
