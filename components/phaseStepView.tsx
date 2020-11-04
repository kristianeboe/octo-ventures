import React, {useContext, useState} from "react";
import ReactHtmlParser, {processNodes, convertNodeToElement, htmlparser2} from 'react-html-parser';
import {PhaseStep} from "../utils/interfaces";
import {CompanyMetricContext} from "../layouts/Layout";
import {BooleanFormInput} from "./BooleanFormInput";
import {TextFormInput} from "./TextFormInput";
import {MultipleChoiceFormInput} from "./MultipleChoiceFormInput";
import {UserContext} from "../utils/UserProvider";


export const PhaseStepView: React.FC<{ step: PhaseStep }> = ({step}) => {

    const {computeChanceOfSuccess} = useContext(CompanyMetricContext);
    const [metricsComputed, setMetricsComputed] = useState<boolean>(false);

    const {user, firebaseUser} = useContext(UserContext);

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
                {user && <form>
                    {getFormInput()}
                </form>}
                {step.answerType == "TEXT" &&
                <p><i>*Filling out free text fields automatically increase estimated chance of success, but note that the
                    answers will need to be validated by Perigee.</i></p>
                }
            </div>
            {step.bestPractice &&
            <div className={"bestPracticeContainer"}>
                <div className={"bestPracticeDescription"}>{ReactHtmlParser(step.bestPractice.description)}</div>
            </div>
            }
        </div>
    );
};