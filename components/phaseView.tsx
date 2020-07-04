import * as React from "react";
import {Phase} from "../utils/interfaces";
import {PhaseStepView} from "./phaseStepView";

export const PhaseView: React.FC<{
    phase: Phase
}> = ({phase}) => {
    return (
        <div className={"phaseContainer"}>
            <div><h1>The {phase.type} phase</h1></div>
            <div className={"phaseMotivation"}><p><strong>Motivation: </strong>{phase.motivation}</p></div>

            {phase.steps.map(step => <PhaseStepView step={step}/>)}
        </div>
    )
};