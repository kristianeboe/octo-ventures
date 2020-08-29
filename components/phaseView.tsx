import * as React from "react";
import {Phase} from "../utils/interfaces";
import {PhaseStepView} from "./phaseStepView";

export const PhaseView: React.FC<{
    phase: Phase
}> = ({phase}) => {
    return (
        <div className={"phaseContainer"}>
            <div><h1>The {phase.type} phase</h1></div>
            <div className={"phaseMotivation"}><p>{phase.motivation}</p></div>

            {Object.values(phase.steps).sort((a,b) => a.order - b.order).map(step => <PhaseStepView step={step} key={step.question} />)}
        </div>
    )
};