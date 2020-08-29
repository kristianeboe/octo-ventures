import {PhaseView} from "../../components/phaseView";
import React, {useContext} from "react";
import {Phase} from "../../utils/interfaces";
import {PhaseContext} from "../../utils/PhaseProvider";

export default function Scale () {

    const phaseId = "620e18b2-8100-4175-9841-c09920417d33";

    const {phases} = useContext(PhaseContext);

    if (phases[phaseId]) {
        return <PhaseView phase={phases[phaseId]}/>
    } else {
        return <div>
            Loading...
        </div>
    }
};