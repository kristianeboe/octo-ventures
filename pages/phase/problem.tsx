import React, {useContext} from "react";
import {PhaseView} from "../../components/phaseView";
import {Phase} from "../../utils/interfaces";
import {PhaseContext} from "../../utils/PhaseProvider";

export default function Problem () {

    const phaseId = "c865a20c-4ad9-484f-909c-43719a670819";

    const {phases} = useContext(PhaseContext);

    if (phases[phaseId]) {
        return <PhaseView phase={phases[phaseId]}/>
    } else {
        return <div>
            Loading...
        </div>
    }
};