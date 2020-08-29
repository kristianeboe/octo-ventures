import {FormControl, FormControlLabel, Radio, RadioGroup, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {Answer} from "../utils/interfaces";

export const TextFormInput: React.FC<{onAnswerUpdated: (boolean) => void}> = ({onAnswerUpdated}) => {

    const [answer, setAnswer] = useState<any>("");

    function handleChange(event) {
        setAnswer(event.target.value);
        if (event.target.value.length > 0) {
            onAnswerUpdated(true);
        }
    }

    return (
        <TextField value={answer} onChange={handleChange} variant={"outlined"} fullWidth/>
    )
};