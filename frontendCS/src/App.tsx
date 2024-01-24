
    import React, { useEffect } from 'react'
    import './App.css'
    import { Landing } from './components/Landing'
    import { Topbar } from './components/Topbar.tsx'
    import { Signin } from './components/Signin.tsx'
    import { onAuthStateChanged,getAuth} from "firebase/auth";
    import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
    import { userAtom } from './store/atoms/user.ts';
    import { Card } from './components/Card.tsx'


    // 
    // adding backend of firebase here

    // Import the functions you need from the SDKs you need

    

    // 

    function App() {
      return <RecoilRoot>
        <StoreApp />
      
      </RecoilRoot>
    }

    function StoreApp(){
      const [user,setUser]=useRecoilState(userAtom);
      useEffect(() => {
        const auth = getAuth(); // Define auth here

        onAuthStateChanged( auth,function(user) {
          if (user && user.email) {
            setUser({
              loading:false,
              user:{
                email:user.email
              }
            })
          
          } else {
            setUser({
              loading:false
            })
            // No user is signed in.
            console.log('There is no logged in user');
          }
      });
    },[])
    if(user.loading){
      return <div>Loading....</div>
    }
    if(!user.user){
      return <div><Signin /></div>
    }
      return (
        <>
          <div className="place-items-center grid">
              <div className="max-w-screen-lg w-full ">
                <Topbar />
                <Card> hi there </Card>
              </div>
          </div>
        </>
      )
    }
    export default App;
