import { createContext, useEffect, useState } from "react";
import { auth, firestore } from "../config/firebase";
import { useRouter } from "next/router";

export const UserContext = createContext<{
  user: {
    answers: any;
    id: string;
    email: string;
    name: string;
    sessions: {
      [day: string]: number;
    };
  };
  firebaseUser: any;
}>({
  user: null,
  firebaseUser: null,
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [firebaseUser, setFirebaseUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      setFirebaseUser(authUser);

      const today = new Date();
      const todayDate = today.toISOString().slice(0, 10);

      if (authUser) {
        if (!user?.sessions || !user?.sessions[todayDate]) {
          firestore
            .collection("users")
            .doc(authUser.uid)
            .update({
              [`sessions.${todayDate}`]: 1,
            });
        } 

        firestore
          .collection("users")
          .doc(authUser.uid)
          .onSnapshot((doc) => {
            const user = doc.data();

            setUser(user);
          });
      } else {
        setUser(null);
        router.push("/");
      }
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        firebaseUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
