import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';


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

      // Log out
      const logOut = () => {
            setLoading(true);
            return signOut(auth)
      }



      const saveUser = async (user) => {
            const currentUser = {
                  email: user?.email,
                  role: user?.role || 'user',
                  status: 'verify'
            }
            const { data } = await axios.put('http://localhost:5000/users', currentUser)
            // console.log('data', data)
            return data;
      }


      const getToken = async (user) => {
            const email = user?.email;
            const { data } = await axios.post('http://localhost:5000/jwt', email)
            if (data.token) {
                  console.log('token', data?.token)
                  localStorage.setItem('token', data?.token)
            }

      }




      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                  if (currentUser) {
                        setUser(currentUser);
                        saveUser(currentUser);
                        getToken(currentUser);
                        console.log('currentUser', currentUser);
                        setLoading(false);
                  } else {
                        localStorage.removeItem("token");
                        setUser(null);
                        setLoading(false);
                  }
            });

            return () => unSubscribe();
      }, []);




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