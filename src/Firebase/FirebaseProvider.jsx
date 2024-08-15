import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null)



    //create user
    const createUser = (email, password) => {
        // createUserWithEmailAndPassword(auth, email, password)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    //google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //Logout user
    const logout = () => {
        setUser(null)
        signOut(auth)
    }

    //observer user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    const allValue = {
        createUser,
        signInUser,
        googleLogin,
        logout,
        user
    }
    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;