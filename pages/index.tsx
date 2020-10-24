import {useEffect, useContext} from "react";
import Router from "next/router";
import { auth } from '../config/firebase';
import fire from '../config/firebase';
import { signInWithGoogle, signOut } from '../utils/auth';
import { UserContext } from '../utils/UserProvider';
import { populateDB } from "../utils/firebase_populate";




export default function Home() {
//  useEffect(() => {
//    Router.push("/phase/problem");
//  }, []);

  const {user, firebaseUser} = useContext(UserContext);

  return <div>
    {firebaseUser ?
        <button onClick={signOut}>
          Log out
        </button>
        :
        <button onClick={signInWithGoogle}>
          Google
        </button>
    }

    {/* <button onClick={populateDB}>
    Populate
  </button> */}

  </div>;
}
