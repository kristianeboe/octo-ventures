import {FormControl, FormControlLabel, Radio, RadioGroup, TextField} from "@material-ui/core";
import React, {useContext, useEffect, useState} from "react";
import { firestore } from '../config/firebase';
import {UserContext} from "../utils/UserProvider";

export const TextFormInput: React.FC<{onAnswerUpdated: (boolean) => void, stepId: string}> = ({onAnswerUpdated, stepId}) => {

    const {user, firebaseUser} = useContext(UserContext);

    // const initialAnswers = firestore.collection('users').doc(user.id).collection('answers').doc(stepId).
    const [answer, setAnswer] = useState<any>("");

    useEffect(() => {
        const initialAnswers = firestore.collection('users').doc(firebaseUser.uid).onSnapshot(docSnapshot => {
            setAnswer(docSnapshot.data().answers[stepId]);
        })
        // console.log(initialAnswers);
    }, []);

    async function handleChange(event) {
        const newAnswer = event.target.value;
        setAnswer(newAnswer);
        if (newAnswer.length > 0) {
            onAnswerUpdated(true);
        } else {
            onAnswerUpdated(false);
        }
        await firestore.collection('users').doc(firebaseUser.uid).set({answers: {[stepId]: newAnswer}}, {merge: true})
    }

    return (
        <TextField value={answer} onChange={handleChange.bind(this)} variant={"outlined"} fullWidth/>
    )
};