import React, {useContext} from "react";
import {PhaseView} from "../../components/phaseView";
import {Phase} from "../../utils/interfaces";
import {PhaseContext} from '../../utils/PhaseProvider';

export default function Develop() {

    const phaseId = "1fd5a7fb-2bda-4f3f-82dd-cd0049ca63ad";

    const {phases} = useContext(PhaseContext);

    if (phases[phaseId]) {
        return <PhaseView phase={phases[phaseId]}/>
    } else {
        return <div>
            Loading...
        </div>
    }
}