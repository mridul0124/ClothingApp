import React from "react";
import { useState } from "react";
import './sign-in-format.styles.css'

import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component'
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    email : '',
    password: '',
}

const SignInForm = () => {

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    
    // console.log(formFields);


    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async() => {
        await signInWithGooglePopup(); 
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();

        try{
           await signInAuthUserWithEmailAndPassword(email,password);
            resetFormFields();
        }catch(error){
            switch(error.code){
                case 'auth/user-not-found' :
                    alert("User not found with this email ");
                    break;
                case 'auth/wrong-password':
                    alert("Password is incorrect")
                    break;
                default:
                    console.log(error);
            }
            
        }
    };


    const handleChange = (event) =>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value}); 
    };
    return (
        <div className="sign-up-container">
        <h2>Already have an accounnt?</h2>
        <span>Sign In With Email and Password</span>
        <form onSubmit={handleSubmit}>
        
        
        <FormInput 
        label = "Email"
        type = 'email' 
        required 
        onChange={handleChange} 
        name = "email" 
        value={email}
        />

        <FormInput 
        label = "Password"
        type = 'password' 
        required 
        onChange={handleChange} 
        name = "password" 
        value={password}
        />

        <div className="buttons-container">
         <Button type ="submit">Sign In</Button>
         <Button  type = "button" buttonType= 'google' onClick = {signInWithGoogle}>Google Sign In</Button>
        </div>   
        
        </form>
        </div>
    );
}

export default SignInForm;