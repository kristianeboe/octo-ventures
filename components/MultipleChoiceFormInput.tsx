import {Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {Answer} from "../utils/interfaces";
import { UserContext } from '../utils/UserProvider';
import { useContext } from 'react';
import { firestore } from '../config/firebase';

export const MultipleChoiceFormInput: React.FC<{ answers: Answer[], onAnswerUpdated: (boolean) => void, initialValues?: any , stepId: string}> = ({answers, onAnswerUpdated, stepId}) => {
    const { user, firebaseUser } = useContext(UserContext);
    const initialValue = user?.answers[stepId] || [] 
  
    
    const [state, setState] = React.useState(answers.reduce((map, obj, idx)=>(map[obj.value] = user?.answers[stepId]?.find((val) => val === obj.value) || false, map),{}));

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        let newValues = { ...state, [event.target.name]: event.target.checked };
        const completed = answers.filter(ans => ans.required && !newValues[ans.value]).length == 0;
        if (completed) {
            onAnswerUpdated(true);
        } else {
            onAnswerUpdated(false);
        }
        firestore
      .collection("users")
      .doc(firebaseUser.uid)
      .set({ answers: {[stepId]: Object.entries(newValues).filter(([key, val]) => val).map(([key,val]) => key)} }, { merge: true });
    };

    return (
        <FormControl component="fieldset">
            <FormGroup>
                {answers.map((ans, id) => <FormControlLabel
                    key={id}
                    control={<Checkbox checked={state[ans.value]} onChange={handleChange} name={ans.value}/>}
                    label={ans.value}
                />)}
            </FormGroup>
        </FormControl>
    )
};