import React from "react";
import { useState , useContext} from "react";
import './sign-up-format.styles.css'
import { UserContext } from "../../context/user.context";

import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email : '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    
    // console.log(formFields);
    const {setCurrentUser} = useContext(UserContext);
    
    

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(password !== confirmPassword){
            alert("passwords do not match");
            return ;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            setCurrentUser(user);
            await  createUserDocumentFromAuth(user,{displayName});
            resetFormFields();
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('Same email already exists.')
            }

            console.log('user creation encountered an error',error);
        }
    };


    const handleChange = (event) =>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value}); 
    };
    return (
        <div className="sign-up-container">
        <h2>Don't have an accounnt?</h2>
        <span>Sign Up With Email and Password</span>
        <form onSubmit={handleSubmit}>
        
        <FormInput  
        type = 'text'
        label = "Display Name"
        required 
        onChange={handleChange} 
        name = "displayName" 
        value={displayName}
        />
        
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

        <FormInput 
        label = "Confirm Password"
        type = 'password' 
        required 
        onChange={handleChange} 
        name = "confirmPassword" 
        value={confirmPassword}
        />

        <Button type ="submit">Sign Up</Button>
        </form>
        </div>
    );
}

export default SignUpForm;