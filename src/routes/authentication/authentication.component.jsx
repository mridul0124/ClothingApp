import React from "react";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.css';
const Authentication = () => {

    // useEffect( ()=> {
    //     async function getResponse(){
    //     const response = await getRedirectResult(auth);
    //     if(response){
    //      await createUserDocumentFromAuth(response.user);
    //     }
    // }
    // getResponse();
    // }, []);
    return(
        <div className="authentication-container">
            {/* <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button> */}
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication; 