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

    /*
        Takes a description and a list of URL's.
        The description needs to have square brackets where the links should be.
        The first instance of a text wrapped in [] will transform to a link text with the first url in the list.
        This continues for each occurrence where the occurrence number matches the index of the url in the list.
    */
    function formatBestPracticeDescription(description, urlList){
        let descArr = description.split(/\[(.*?)\]/);
        let returnHTML = [];
        for(let i = 0; i < descArr.length; i++){
            if(i % 2 != 0){
                returnHTML.push(<a target="_blank" href="{urlList[i]}">{descArr[i]}</a>);
            }else{
                returnHTML.push(<span>{descArr[i]}</span>);
            }
        }
        return returnHTML;
    }

    function getFormInput() {
        switch (step.answerType) {
            case "BOOLEAN":
                return <BooleanFormInput stepId={step.id} answers={step.answers} onAnswerUpdated={handleAnswerUpdated}/>;
            case "TEXT":
                return <TextFormInput onAnswerUpdated={handleAnswerUpdated} stepId={step.id} />;
            case "MULTI":
                return <MultipleChoiceFormInput stepId={step.id} answers={step.answers} onAnswerUpdated={handleAnswerUpdated}/>
            default:
                return <TextFormInput onAnswerUpdated={handleAnswerUpdated} stepId={step.id}/>;
        }
    }

    return (
        <div className={"phaseStepContainer"}>
            <div className={"questionContainer"}>
                <h3>{step.question}</h3>
                {user && <form>
                    {getFormInput()}
                </form>}
            </div>
            {step.bestPractice &&
                <div className={"bestPracticeContainer"}>
                    <h3>Best practice resources</h3>
                    <div className={"bestPracticeDescription"}>{formatBestPracticeDescription(step.bestPractice.description, step.bestPractice.urls)}</div>
                    {step.bestPractice.urls.map((url, id) => <div className={"bestPracticeLink"} key={id}><a href={url} target={"_blank"}>{url}</a></div>)}
                </div>
            }
        </div>
    );
};