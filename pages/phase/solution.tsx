import React from "react";
import {PhaseView} from "../../components/phaseView";
import {Phase} from "../../utils/interfaces";

export default function Solution () {
    const solutionPhase: Phase = {
        type: "Solution",
        motivation: "Lorem ipsum",
        steps: []
    };

    return (
        <PhaseView phase={solutionPhase}/>
    )
};