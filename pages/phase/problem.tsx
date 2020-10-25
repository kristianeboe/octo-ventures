import React, {useContext} from "react";
import {PhaseView} from "../../components/phaseView";
import {Phase} from "../../utils/interfaces";
import {PhaseContext} from "../../utils/PhaseProvider";

export default function Problem () {

    const phaseId = "ca30ce0f-6359-4547-9f27-596fe1666852";

    const {phases} = useContext(PhaseContext);

    if (phases[phaseId]) {
        return <PhaseView phase={phases[phaseId]}/>
    } else {
        return <div>
            Loading...
        </div>
    }
};