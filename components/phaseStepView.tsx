import React, {useContext, useState} from "react";
import {Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup, TextField} from "@material-ui/core";
import {Answer, AnswerType, PhaseStep} from "../utils/interfaces";
import {useCompanyMetrics} from "../utils/useCompanyMetrics";
import {CompanyMetricContext} from "../layouts/Layout";
import {BooleanFormInput} from "./BooleanFormInput";
import {TextFormInput} from "./TextFormInput";
import {MultipleChoiceFormInput} from "./MultipleChoiceFormInput";
import {UserContext} from "../utils/UserProvider";


export const PhaseStepView: React.FC<{step: PhaseStep}> = ({step}) => {

    const {computeChanceOfSuccess, computeCompanyEvaluation} = useContext(CompanyMetricContext);
    const [metricsComputed, setMetricsComputed] = useState<boolean>(false);

    const {user, firebaseUser} = useContext(UserContext);

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

    function handleAnswerUpdated(validAnswer: boolean) {
        if(validAnswer) {
            if (!metricsComputed) {
                makeComputation();
            }
        } else if (metricsComputed){
            reverseComputation();
        }
    }

    function getFormInput() {
        switch (step.answerType) {
            case "BOOLEAN":
                return <BooleanFormInput answers={step.answers} onAnswerUpdated={handleAnswerUpdated}/>;
            case "TEXT":
                return <TextFormInput onAnswerUpdated={handleAnswerUpdated} stepId={step.id}/>;
            case "MULTI":
                return <MultipleChoiceFormInput answers={step.answers} onAnswerUpdated={handleAnswerUpdated}/>
            default:
                return <TextFormInput onAnswerUpdated={handleAnswerUpdated} stepId={step.id}/>;
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
                    {step.bestPractice?.map((bp, id) => <div key={id}><a href={bp.url} target={"_blank"}>{bp.description || bp.url}</a></div>)}
                </div>
            }
        </div>
    );
};