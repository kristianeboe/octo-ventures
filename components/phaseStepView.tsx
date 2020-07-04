import React, {useContext, useState} from "react";
import {FormControl, FormControlLabel, Radio, RadioGroup, TextField} from "@material-ui/core";
import {Answer, AnswerType, PhaseStep} from "../utils/interfaces";
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
        if(step.answers.find(ans => ans.value === event.target.value && ans.required)) {
            if (!metricsComputed) {
                makeComputation();
            }
        } else if (metricsComputed){
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



    function getBooleanInput() {
        return (
            <FormControl component={"fieldset"}>
                <RadioGroup value={stepAnswer} onChange={handleBooleanInputChanged}>
                    {step.answers.map(answer => <FormControlLabel value={answer.value} control={<Radio />} label={answer.value}/>)}
                </RadioGroup>
            </FormControl>
        )
    }

    function getTextInput() {
        return <TextField value={stepAnswer} onChange={handleTextFieldChange} fullWidth/>
    }

    function getMultiInput() {
        return getTextInput();
    }

    function getFormInput() {
        switch (step.answerType) {
            case "BOOLEAN":
                return getBooleanInput();
            case "TEXT":
                return getTextInput();
            case "MULTI":
                return getMultiInput();
            default:
                return getTextInput();
        }
    }

    return (
        <div className={"phaseStepContainer"}>
            <div><h2>{step.question}</h2></div>
            <form>
                {getFormInput()}
            </form>
            {step.bestPractice &&
                <div>
                    <h2>Best practice resources</h2>
                    {step.bestPractice?.map(bp => <div><a href={bp.url} target={"_blank"}>{bp.description || bp.url}</a></div>)}
                </div>
            }
        </div>
    );
};