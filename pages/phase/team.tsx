import {PhaseView} from "../../components/phaseView";
import React from "react";
import {Phase} from "../../utils/interfaces";

export default function Team () {
    const teamPhase: Phase = {
        type: "Team",
        motivation: "Lorem ipsum",
        steps: []
    };

    return (
        <PhaseView phase={teamPhase}/>
    )
};