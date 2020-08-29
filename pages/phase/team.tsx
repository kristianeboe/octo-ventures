import {PhaseView} from "../../components/phaseView";
import React, {useContext} from "react";
import {Phase} from "../../utils/interfaces";
import {PhaseContext} from "../../utils/PhaseProvider";

export default function Team () {

    const phaseId = "3dae4c85-eba6-400f-8461-414159ff038d";

    const {phases} = useContext(PhaseContext);

    if (phases[phaseId]) {
        return <PhaseView phase={phases[phaseId]}/>
    } else {
        return <div>
            Loading...
        </div>
    }
};