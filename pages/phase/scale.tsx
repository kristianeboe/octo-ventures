import {PhaseView} from "../../components/phaseView";
import React from "react";
import {Phase} from "../../utils/interfaces";

export default function Scale () {
    const scalePhase: Phase = {
        type: "Scale",
        motivation: "Lorem ipsum",
        steps: []
    };

    return (
        <PhaseView phase={scalePhase}/>

    )
};