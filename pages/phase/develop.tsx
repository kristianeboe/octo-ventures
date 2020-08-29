import React, {useContext} from "react";
import {PhaseView} from "../../components/phaseView";
import {Phase} from "../../utils/interfaces";
import {PhaseContext} from '../../utils/PhaseProvider';

export default function Develop() {

    const phaseId = "f2807b5f-ed1c-4564-9aca-14bd509a26aa";

    const {phases} = useContext(PhaseContext);

    if (phases[phaseId]) {
        return <PhaseView phase={phases[phaseId]}/>
    } else {
        return <div>
            Loading...
        </div>
    }
}