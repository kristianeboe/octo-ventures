import {PhaseView} from "../../components/phaseView";
import React, {useContext} from "react";
import {Phase} from "../../utils/interfaces";
import {PhaseContext} from "../../utils/PhaseProvider";

export default function Scale () {

    const phaseId = "01f9c4bc-f55a-403c-8154-9e1b239315c1";

    const {phases} = useContext(PhaseContext);

    if (phases[phaseId]) {
        return <PhaseView phase={phases[phaseId]}/>
    } else {
        return <div>
            Loading...
        </div>
    }
};