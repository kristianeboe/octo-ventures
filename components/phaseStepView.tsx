import React, {useContext, useEffect, useState} from "react";
import ReactHtmlParser from 'react-html-parser';
import {PhaseStep} from "../utils/interfaces";
import {CompanyMetricContext} from "../layouts/Layout";
import {BooleanFormInput} from "./BooleanFormInput";
import {TextFormInput} from "./TextFormInput";
import {MultipleChoiceFormInput} from "./MultipleChoiceFormInput";
import {UserContext} from "../utils/UserProvider";


export const PhaseStepView: React.FC<{ step: PhaseStep }> = ({step}) => {

    const {computeChanceOfSuccess} = useContext(CompanyMetricContext);
    const {user, firebaseUser} = useContext(UserContext);

    const isInitiallyAnsweredCorrectly = () => {
        if (step.answerType === "MULTI") {
            return JSON.stringify(user.answers[step.id].sort()) == JSON.stringify(step.answers.filter(ans => ans.required).map(ans=>ans.value).sort())
        } else if (step.answerType === "BOOLEAN") {
            return !!step.answers.find((ans) => ans.value === user.answers[step.id] && ans.required)
        } else if (step.answerType === "TEXT") {
            return user.answers[step.id].length > 0;
        }
        return false
    };

    const [metricsComputed, setMetricsComputed] = useState<boolean>(false);
    useEffect(() => {
        const initiallyAnsweredCorrectly = isInitiallyAnsweredCorrectly();
        setMetricsComputed(initiallyAnsweredCorrectly);
    }, []);
    console.log(user);

    function makeComputation() {
        computeChanceOfSuccess(step.scoringFunction.companySuccessRateIncrement);
        setMetricsComputed(true)
    }

    function reverseComputation() {
        computeChanceOfSuccess(-1 * step.scoringFunction.companySuccessRateIncrement);
        setMetricsComputed(false);
    }

    function handleAnswerUpdated(validAnswer: boolean) {
        if (validAnswer) {
            if (!metricsComputed) {
                makeComputation();
            }
        } else if (metricsComputed) {
            reverseComputation();
        }
    }

    function getFormInput() {
        switch (step.answerType) {
            case "BOOLEAN":
                return <BooleanFormInput stepId={step.id} answers={step.answers}
                                         onAnswerUpdated={handleAnswerUpdated}/>;
            case "TEXT":
                return <TextFormInput onAnswerUpdated={handleAnswerUpdated} stepId={step.id}/>;
            case "MULTI":
                return <MultipleChoiceFormInput stepId={step.id} answers={step.answers}
                                                onAnswerUpdated={handleAnswerUpdated}/>;
            default:
                return <TextFormInput onAnswerUpdated={handleAnswerUpdated} stepId={step.id}/>;
        }
    }

    return (
        <div className={"phaseStepContainer"}>
            <div className={"questionContainer"}>
                <h3>{step.question}</h3>
                {user && <form onSubmit={(event => {event.preventDefault()})}>
                    {getFormInput()}
                </form>}
                {step.answerType == "TEXT" &&
                <p><i>*Filling out free text fields automatically increase estimated chance of success, but note that the
                    answers will need to be validated by Perigee.</i></p>
                }
            </div>
            {step.bestPractice &&
            <div className={"bestPracticeContainer"}>
                <div className={"bestPracticeDescription"}>{ReactHtmlParser(step.bestPractice)}</div>
            </div>
            }
        </div>
    );
};