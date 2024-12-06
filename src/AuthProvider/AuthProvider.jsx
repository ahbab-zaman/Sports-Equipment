import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../Firebase/Firebase.init";
import { useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // User Registration
  const userRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   User Login

  const userLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // User signout
  const userSignOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  // Update profile function

  const profileUpdate = (updatedUser) => {
    setLoading(true)
    return updateProfile(auth.currentUser, updatedUser)
  }

  // Observer function

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    userRegister,
    userLogin,
    userSignOut,
    profileUpdate
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
