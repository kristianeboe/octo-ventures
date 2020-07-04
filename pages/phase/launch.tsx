import {PhaseView} from "../../components/phaseView";
import React from "react";
import {Phase} from "../../utils/interfaces";

export default function Launch () {
    const launchPhase: Phase = {
        type: "Launch",
        motivation: "Lorem ipsum",
        steps: []
    };

    return (
        <PhaseView phase={launchPhase}/>
    )
};