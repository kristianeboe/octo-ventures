import {Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {Answer} from "../utils/interfaces";

export const MultipleChoiceFormInput: React.FC<{ answers: Answer[], onAnswerUpdated: (boolean) => void }> = ({answers, onAnswerUpdated}) => {

    const [state, setState] = React.useState(answers.reduce((map, obj)=>(map[obj.value] = false, map),{}));

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        let newValues = { ...state, [event.target.name]: event.target.checked };
        console.log(newValues);
        const completed = answers.filter(ans => ans.required && !newValues[ans.value]).length == 0;
        if (completed) {
            onAnswerUpdated(true);
        } else {
            onAnswerUpdated(false);
        }
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