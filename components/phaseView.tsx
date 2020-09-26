import * as React from "react";
import {Phase} from "../utils/interfaces";
import {PhaseStepView} from "./phaseStepView";
import Link from "next/link";
import {useCompanyMetrics} from "../utils/useCompanyMetrics";

export const PhaseView: React.FC<{
    phase: Phase
}> = ({phase}) => {
    let {chanceOfSuccess} = useCompanyMetrics();
    return (
        <div className={"phaseContainer"}>
            <div className={"phaseHeader"}>
                <div className={"phaseSelector"}>
                    <div className={"phaseLink"}><Link href={"/phase/problem"}><a>1. Define the problem</a></Link></div>
                    <div className={"phaseLink"}><Link href={"/phase/team"}><a>2. Create the team</a></Link></div>
                    <div className={"phaseLink"}><Link href={"/phase/research"}><a>3. Do the research</a></Link></div>
                    <div className={"phaseLink"}><Link href={"/phase/develop"}><a>4. Develop the solution</a></Link></div>
                    <div className={"phaseLink"}><Link href={"/phase/launch"}><a>5. Launch the solution</a></Link></div>
                    <div className={"phaseLink"}><Link href={"/phase/scale"}><a>6. Scale the company</a></Link></div>
                </div>
                <div className={"phaseHeadline"}>
                    <div className={"phaseTitle"}><h2>The {phase.type} phase</h2></div>
                    <div className={"companySuccessRate"}>Estimated chance of success: {chanceOfSuccess} %</div>
                </div>
            </div>
            <div className={"phaseMotivation"}><p>{phase.motivation}</p></div>

            {Object.values(phase.steps).sort((a,b) => a.order - b.order).map(step => <PhaseStepView step={step} key={step.question} />)}
        </div>
    )
};