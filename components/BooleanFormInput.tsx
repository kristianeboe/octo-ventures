import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import React, { useState } from "react";
import { Answer } from "../utils/interfaces";
import { useContext } from "react";
import { UserContext } from "../utils/UserProvider";
import { firestore } from "../config/firebase";

export const BooleanFormInput: React.FC<{
  answers: Answer[];
  onAnswerUpdated: (boolean) => void;
  stepId: string;
}> = ({ answers, onAnswerUpdated, stepId }) => {
  const { user, firebaseUser } = useContext(UserContext);
  const initialValue = user?.answers[stepId] || '' 
  
  const [answer, setAnswer] = useState<any>(initialValue);

  function handleChange(event) {
    setAnswer(event.target.value);
    if (
      answers.find((ans) => ans.value === event.target.value && ans.required)
    ) {
      onAnswerUpdated(true);
    } else {
      onAnswerUpdated(false);
    }
    firestore
      .collection("users")
      .doc(firebaseUser.uid)
      .set({ answers: { [stepId]: event.target.value } }, { merge: true });
  }

  return (
    <FormControl component={"fieldset"}>
      <RadioGroup value={answer} onChange={handleChange}>
        {answers.map((answer, id) => (
          <FormControlLabel
            key={id}
            value={answer.value}
            control={<Radio />}
            label={answer.value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
