import {useEffect} from "react";
import Router from "next/router";
import { auth } from '../config/firebase';
import fire from '../config/firebase';
import { signInWithGoogle } from '../utils/auth';




export default function Home() {
//  useEffect(() => {
//    Router.push("/phase/problem");
//  }, []);

  return <div>
    <button onClick={signInWithGoogle} >
      Google
    </button>
  </div>;
}
