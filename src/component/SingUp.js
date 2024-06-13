import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';
import { Link } from 'react-router-dom';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [name,setName]=useState('')

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    
    setError('');

    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password,name);
      alert('Account created')
      console.log('Account created');
    } catch (err) {
      alert('Error creating account:', err);
      setError('Error creating account: ' + err.message);
    }
  };

  return (
    <div className='h-screen flex items-center flex-col justify-center p-10 gap-4 bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <h1 className='text-[40px]'>SIGN UP</h1>
      <div className='flex items-center flex-col p-20 gap-4 bg-white'>
        {error && <div className="text-red-500">{error}</div>}
        <div className='flex gap-6'>
          <h2 className='text-lg items-center flex'>Name :</h2>
          <input
            type='text'
            placeholder='Enter Name'
            className='pt-1 pb-1 pl-2 pr-2 rounded-lg border-2 border-black'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className='flex gap-6'>
          <h2 className='text-lg items-center flex'>Email :</h2>
          <input
            type='email'
            placeholder='Enter email'
            className='pt-1 pb-1 pl-2 pr-2 rounded-lg border-2 border-black'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className='flex gap-4'>
          <h2 className='text-lg items-center flex'>Password :</h2>
          <input
            type='password'
            placeholder='Enter Password'
            className='pt-1 pb-1 pl-2 pr-2 rounded-lg border-2 border-black'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className='text-center'>
          <button
            className='bg-orange-500 pt-1 pb-1 pl-12 pr-12 rounded-lg'
            type='submit'
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <h2>Already Registered ? <Link to='/login' className='clore-blue'>Login</Link></h2>
          <p><Link to='/'>Home</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;