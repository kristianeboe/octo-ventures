import React, {useEffect, useContext} from "react";
import Router from "next/router";
import {auth} from '../config/firebase';
import fire from '../config/firebase';
import {signInWithGoogle, signOut} from '../utils/auth';
import {UserContext} from '../utils/UserProvider';
import {populateDB} from "../utils/firebase_populate";
import {WorkshopPhoto} from "../layouts/WorkshopPhoto";


export default function Home() {
    const {user, firebaseUser} = useContext(UserContext);

    useEffect(() => {
        if (firebaseUser) {
            Router.push("/phase/problem");
        }
    }, [firebaseUser]);

    const onClick = async () => {
        if (!firebaseUser) {
            await signInWithGoogle("/phase/problem");
        } else {
            await signOut();
        }
    };

    function getStartedButton() {
        return firebaseUser ?
             <button onClick={signOut}>
                Log out
            </button>
            :
            <button onClick={onClick}>
                Google
            </button>;
    }

    return <div className={"landingPage"}>

        <div className={"presentation"}>
            <div className={"workshopPhoto"}>
                <WorkshopPhoto/>
            </div>
            <div className={"salesPitch"}>
                <h1>90% of start-ups fail. Make sure yours don't.</h1>
                <h3>Perigee is the software designed to help entrepreneurs boost their chance of success and drive company value creation.</h3>
                <div>
                    <p>Test your company's chance of success</p>
                    <p>Understand the critical success factors in every step of your start-up's journey</p>
                    <p>Improve your chance of success with the help of best practice methodologies and tools</p>
                </div>
                <div className={"getStarted"}>
                    <button className={"getStartedButton"} onClick={onClick}>
                        {firebaseUser ? "Log out" : "Get started!"}
                    </button>
                </div>
            </div>
        </div>




  {/*       <button onClick={populateDB}>*/}
  {/*  Populate*/}
  {/*</button>*/}

    </div>;
}
