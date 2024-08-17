import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const FirebaseProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true);

    //create user
    const createUser = (email, password) => {
        // createUserWithEmailAndPassword(auth, email, password)
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    //sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    //google login
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    //Logout user
    const logout = () => {
        setUser(null)
        signOut(auth)
    }

    //observer user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            setLoading(false);
          }
        });
        return () => unsubscribe();
      }, []);

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user)
    //             setLoading(false);
    //         }
    //     });
    // }, [])

    const allValue = {
        createUser,
        signInUser,
        googleLogin,
        logout,
        user,
        updateUserProfile,
        loading
    }
    return (
        <AuthContext.Provider value={allValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;