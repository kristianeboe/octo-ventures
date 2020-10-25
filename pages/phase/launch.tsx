import {PhaseView} from "../../components/phaseView";
import React, {useContext} from "react";
import {Phase} from "../../utils/interfaces";
import {PhaseContext} from "../../utils/PhaseProvider";

export default function Launch() {

    const phaseId = "260912e3-2e0d-4745-96e7-a1bad331718e";

    const {phases} = useContext(PhaseContext);

    if (phases[phaseId]) {
        return <PhaseView phase={phases[phaseId]}/>
    } else {
        return <div>
            Loading...
        </div>
    }
};