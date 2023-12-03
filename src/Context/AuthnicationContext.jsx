import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import app from "../firebase";
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export default function AuthnicationContext({ children }) {
  const [Cureentuser, SetCureentuser] = useState();
  const [loading, setloading] = useState(true);
  const auth = getAuth(app);
  const googleprovider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        SetCureentuser(user);
        setloading(false);
      } else {
        SetCureentuser();
        setloading(false);
      }
    });
  }, []);

  const continueWithGoogle = async () => {
    
    await signInWithPopup(auth, googleprovider);
  };

  const continueWithGithub = async () => {
    
    await signInWithPopup(auth, githubProvider);
  };

  const Signup = async (username, email, password) => {
    
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: username });
  };

  const SignIn = async (email, password) => {

    await signInWithEmailAndPassword(auth, email, password);
  };

  const signout = async () => {
    
    await signOut(auth);
  };

  const sendeVerificationmail = async () => {
    await sendEmailVerification(auth.currentUser);
  };
  const forgetpassword = async (email) => {
    await sendPasswordResetEmail(auth, email);
  };
  
  return (
    <AuthContext.Provider
      value={{
        loading,
        forgetpassword,
        sendeVerificationmail,
        SignIn,
        signout,
        Signup,
        auth,
        setloading,
        continueWithGoogle,
        continueWithGithub,
        Cureentuser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
