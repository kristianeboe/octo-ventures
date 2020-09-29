import {PhaseView} from "../../components/phaseView";
import React, {useContext} from "react";
import {Phase} from "../../utils/interfaces";
import {PhaseContext} from "../../utils/PhaseProvider";

export default function Launch() {

    const phaseId = "bb8d8304-0661-4e5d-86e2-28ed0efa369e";

    const {phases} = useContext(PhaseContext);

    if (phases[phaseId]) {
        return <PhaseView phase={phases[phaseId]}/>
    } else {
        return <div>
            Loading...
        </div>
    }
};