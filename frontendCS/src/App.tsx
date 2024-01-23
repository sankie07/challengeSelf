
import React, { useEffect } from 'react'
import './App.css'
import { Landing } from './components/Landing'
import { Signin } from './components/Signin.tsx'
import { onAuthStateChanged,getAuth} from "firebase/auth";


// 
// adding backend of firebase here

// Import the functions you need from the SDKs you need

 

// 

function App() {
  useEffect(() => {
    const auth = getAuth(); // Define auth here

    onAuthStateChanged( auth,function(user) {
      if (user) {
        console.log('This is the user: ', user)
      } else {
        // No user is signed in.
        console.log('There is no logged in user');
      }
  });
},[])

  return (
    <>
      <div>
        <Signin />
      </div>

    </>
  )
}

export default App;
