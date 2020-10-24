import {TextField,} from "@material-ui/core";
import React, {useContext} from "react";
import {firestore} from "../config/firebase";
import {UserContext} from "../utils/UserProvider";
import {useDebouncedInput} from "../utils/genericHooks/debounceHook";


const useSaveTextAnswer = (userId, stepId,defaultValue) => useDebouncedInput(answer => firestore
    .collection("users")
    .doc(userId)
    .set({ answers: { [stepId]: answer } }, { merge: true }), defaultValue);


export const TextFormInput: React.FC<{
  onAnswerUpdated: (boolean) => void;
  stepId: string;

}> = ({ onAnswerUpdated, stepId }) => {
  const { user, firebaseUser } = useContext(UserContext);
  const initialValue = user?.answers[stepId] || '';


  const {inputText, setInputText} = useSaveTextAnswer(firebaseUser?.uid, stepId, initialValue);


  function handleChange(event) {
    console.log("handle lunsj");
    const newAnswer = event.target.value;
    setInputText(newAnswer);
    if (newAnswer.length > 0) {
      onAnswerUpdated(true);
    } else {
      onAnswerUpdated(false);
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <TextField
        value={inputText}
        onChange={handleChange.bind(this)}
        variant={"outlined"}
        fullWidth
      />
    </div>
  );
};
