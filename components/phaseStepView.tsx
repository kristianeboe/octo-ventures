import React, {useContext, useState} from "react";
import {FormControl, FormControlLabel, Radio, RadioGroup, TextField} from "@material-ui/core";
import {AnswerType, PhaseStep} from "../utils/interfaces";
import {useCompanyMetrics} from "../utils/useCompanyMetrics";
import {CompanyMetricContext} from "../layouts/Layout";


export const PhaseStepView: React.FC<{step: PhaseStep}> = ({step}) => {

    const [stepAnswer, setStepAnswer] = useState<any>("");
    const {computeChanceOfSuccess, computeCompanyEvaluation} = useContext(CompanyMetricContext);
    const [metricsComputed, setMetricsComputed] = useState<boolean>(false);

    function handleTextFieldChange(event) {
        setStepAnswer(event.target.value);
        if (event.target.value.length > 0 && !metricsComputed) {
            makeComputation();
        } else if (event.target.value.length == 0 && metricsComputed) {
            reverseComputation();
        }
    }

    function handleBooleanInputChanged(event) {
        setStepAnswer(event.target.value);
        if(event.target.value === step.question.correctAnswer && !metricsComputed) {
            makeComputation();
        } else if (event.target.value !== step.question.correctAnswer && metricsComputed){
            reverseComputation();
        }
    }

    function makeComputation() {
        computeChanceOfSuccess(step.scoringFunction.companySuccessRateIncrement);
        computeCompanyEvaluation(step.scoringFunction.companyValueIncrement);
        setMetricsComputed(true)
    }

    function reverseComputation() {
        computeChanceOfSuccess(-1 * step.scoringFunction.companySuccessRateIncrement);
        computeCompanyEvaluation(-1 * step.scoringFunction.companyValueIncrement);
        setMetricsComputed(false);
    }



    function getBooleanInput(options: string[]) {
        return (
            <FormControl component={"fieldset"}>
                <RadioGroup value={stepAnswer} onChange={handleBooleanInputChanged}>
                    {options.map(option => <FormControlLabel value={option} control={<Radio />} label={option}/>)}
                </RadioGroup>
            </FormControl>
        )
    }

    function getTextInput() {
        return <TextField value={stepAnswer} onChange={handleTextFieldChange.bind(this)} fullWidth/>
    }

    return (
        <div className={"phaseStepContainer"}>
            <div><h2>{step.question.question}</h2></div>
            <div><p><strong>Motivation: </strong>{step.description}</p></div>
            <form>
                {step.question.type === "BOOLEAN" ? getBooleanInput(step.question.answerOptions) : getTextInput()}
            </form>
        </div>
    );
};