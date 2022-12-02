import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect (()=>{
        const unsubscibe = onAuthStateChangedListener((user) => {
            if(user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        })
        return unsubscibe;
    },[]);
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}