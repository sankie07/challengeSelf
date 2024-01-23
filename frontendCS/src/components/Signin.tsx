        import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
        import { app } from "../utils/firebase";
    import { useState } from "react";
        const actionCodeSettings = {
            // URL you want to redirect back to. The domain (www.example.com) for this
            // URL must be in the authorized domains list in the Firebase Console.
            url: 'https://localhost:3000',
            // This must be true.
            handleCodeInApp: true,
        };

        export const Signin =()=>{
            const auth = getAuth(app);
            const [email,setEmail]=useState("");
            
        //     async function onSignin(){
        //         await sendSignInLinkToEmail(auth, email, actionCodeSettings)
        //         .then(() => {
        //             // The link was successfully sent. Inform the user.
        //             // Save the email locally so you don't need to ask the user for it again
        //             // if they open the link on the same device.
        //             window.localStorage.setItem('emailForSignIn', email);
        //             alert("email sent ")
        //             // ...
        //         })
        // .catch((error) => {
        //     alert("email not sent ")
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // ...
        // });
        async function onSignin() {
            try {
              await sendSignInLinkToEmail(auth, email, actionCodeSettings);
              // The link was successfully sent. Inform the user.
              // Save the email locally so you don't need to ask the user for it again
              // if they open the link on the same device.
              window.localStorage.setItem('emailForSignIn', email);
              alert("Email sent successfully");
            } catch (error) {
              alert("Failed to send email");
              const errorCode = error.code;
              const errorMessage = error.message;
              console.error(errorCode, errorMessage);
            }
          }
          

        

        
            return <div >
                <input type="text" placeholder="email" onChange={(e)=>{
                    setEmail(e.target.value);
                }}></input>
            <button onClick={()=>{
                onSignin()
            }}>
                Signup
            </button>
            </div>
        }