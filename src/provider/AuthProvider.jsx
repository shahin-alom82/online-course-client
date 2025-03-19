import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {



      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(false);


      // Create User
      const createUser = (email, password) => {
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
      }

      // Update User Profile
      const updateUserProfile = (name, photo) => {
            return updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photo
            });
      };


      // Login User
      const loginUser = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      };


      // Google Login
      const googleLogin = () => {
            setLoading(true);
            return signInWithPopup(auth, googleProvider);
      };


      const logOut = () => {
            setLoading(true);
            return signOut(auth)
      }




      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser)
                  console.log('currentUser', currentUser)
                  setLoading(false);
            });
            return () => unSubscribe()
      }, [])



      // Auth Info
      const authInfo = {
            user,
            loading,
            createUser,
            updateUserProfile,
            loginUser,
            googleLogin,
            logOut
      };


      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;