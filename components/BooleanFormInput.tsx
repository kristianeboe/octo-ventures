import {FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import React, {useState} from "react";
import {Answer} from "../utils/interfaces";

export const BooleanFormInput: React.FC<{answers: Answer[], onAnswerUpdated: (boolean) => void}> = ({answers, onAnswerUpdated}) => {

    const [answer, setAnswer] = useState<any>("");

    function handleChange(event) {
        setAnswer(event.target.value);
        if(answers.find(ans => ans.value === event.target.value && ans.required)) {
            onAnswerUpdated(true);
        } else {
            onAnswerUpdated(false);
        }
    }

    return (
        <FormControl component={"fieldset"}>
            <RadioGroup value={answer} onChange={handleChange}>
                {answers.map((answer, id) => <FormControlLabel key={id} value={answer.value} control={<Radio />} label={answer.value}/>)}
            </RadioGroup>
        </FormControl>
    )
};