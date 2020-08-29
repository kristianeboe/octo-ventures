import  { createContext, useEffect, useState } from "react";
import { auth, firestore } from '../config/firebase';

export const UserContext = createContext<{user: {id: string, email: string, name: string}, firebaseUser: any}>({ user: null, firebaseUser: null });

export const UserProvider=  ({ children }) => {
  const [user, setUser] = useState(null);
  const [firebaseUser, setFirebaseUser] = useState(null);

  useEffect( () => {
    auth.onAuthStateChanged((authUser) => {
      setFirebaseUser(authUser);
      if(authUser) {
        firestore.collection('users').doc(authUser.uid).get().then(doc => {
          setUser(doc.data())
        })
      } else {
        setUser(null)
      }
    });
  }, []);

  return (<UserContext.Provider 
          value={{user,
          firebaseUser}}>
            {children}
    </UserContext.Provider>)
}

