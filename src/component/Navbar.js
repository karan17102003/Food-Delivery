import React, { useEffect, useState } from 'react';

import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase';
import { Link ,useNavigate} from 'react-router-dom';

// Replace with your Firebase configuration
const yourFirebaseConfig = {
  apiKey: "AIzaSyDe2_syIEmRYqoGXGgrfmkp9gWEF5yeUhY",
  authDomain: "food-7bbdb.firebaseapp.com",
  projectId: "food-7bbdb",
  storageBucket: "food-7bbdb.appspot.com",
  messagingSenderId: "500860103328",
  appId: "1:500860103328:web:77046a38c6d0af01d5b7c5",
  measurementId: "G-7PEY96Z4WV"
};




function Navbar() {

  const [abc, setAbc]=useState(false)
  const [str,steStr]=useState('')


  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
      navigate('/login'); 
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };



  useEffect(() => {
    const app = initializeApp(yourFirebaseConfig);
    const auth = getAuth(app);

    // Get the currently signed-in user
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        steStr(user.email);
      } else {
        // No user is signed in
        console.log("No user is signed in.");
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);
  let firstLetter=str.length>0?str[0]:'';
  console.log(firstLetter)

  return (
    <div className='flex justify-between m-8'>
      <div>
        <h1 className='text-5xl font-Pacifico'>
          <Link to='/'>FoodCart</Link>
        </h1>
      </div>
      <div className='flex gap-4 items-center'>
        <p className='text-[#ed272b] underline'>
          <Link to='/'>Home</Link>
        </p>
        <p>
          <Link to='/Reviews'>Reviews</Link>
        </p>
        <p>
          <Link to='/Cart'>Cart</Link>
        </p>
      </div>
      
      <div className=   {`flex gap-3 ${str.length>0? 'invisible absolute':'visible '}`}  >
        <Link to='/SingUp' className='p-2 rounded-xl bg-[#fa4a0c] text-white'>Sign Up</Link>
        <Link to='/login' className='p-2 rounded-xl bg-[#fa4a0c] text-white'>Login</Link>
      </div>
      <div className=   {`flex gap-3 ${str.length>0? 'visible ':'invisible absolute'} p-2 pl-4 pr-4 bg-[#fa4a0c] rounded-full text-[#ffffff] text-xl font-bold m-2` }
      onClick={()=>{
        setAbc(abc==true?false:true)
      }}

      
      >
        
        <h1>{firstLetter}</h1>
      </div>
      <div className={`bg-[#fa4a0c] h-[100px] w-[250px]  absolute  mt-12 ml-[78%] ${abc==true? 'visible':'invisible '} flex flex-col items-center`}>
        <button className='p-2   text-white '>{str}</button>
        <button className='p-2 rounded-xl bg-white ' onClick={()=>{
          handleSignOut();
        }}>Sign Out</button>

        </div>
      

    </div>
  );
}

export default Navbar;
