import React, {useContext, useEffect} from "react";
import Router from "next/router";
import {signInWithGoogle, signOut} from '../utils/auth';
import {UserContext} from '../utils/UserProvider';
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
                    <div><span className={"salesPitchBullet"}>-</span>Test your company's chance of success</div>
                    <div><span className={"salesPitchBullet"}>-</span>Understand the critical success factors in every step of your start-up's journey</div>
                    <div><span className={"salesPitchBullet"}>-</span>Improve your chance of success with the help of best practice methodologies and tools</div>
                </div>
                <div className={"getStarted"}>
                    <button className={"getStartedButton"} onClick={onClick}>
                        {firebaseUser ? "Log out" : "Get started!"}
                    </button>
                </div>
            </div>
        </div>




  {/*       <button onClick={migrateDB}>*/}
  {/*  Populate*/}
  {/*</button>*/}

  {/*       <button onClick={countTotalPoints()}>*/}
  {/*  count*/}
  {/*</button>*/}

    </div>;
}
