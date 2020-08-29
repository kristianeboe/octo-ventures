import React, {useContext} from "react";
import {PhaseView} from "../../components/phaseView";
import {Phase} from "../../utils/interfaces";
import {PhaseContext} from "../../utils/PhaseProvider";

export default function Research () {

    const phaseId = "982a762e-01d0-49a4-89bd-e066ae0a1e72";

    const {phases} = useContext(PhaseContext);

    if (phases[phaseId]) {
        return <PhaseView phase={phases[phaseId]}/>
    } else {
        return <div>
            Loading...
        </div>
    }
};