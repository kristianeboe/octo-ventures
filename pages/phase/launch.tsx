import {PhaseView} from "../../components/phaseView";
import React from "react";
import {Phase} from "../../utils/interfaces";

export default function Launch() {
    const launchPhase: Phase = {
        type: "Launch",
        motivation: "\"You cannot be afraid to fail, so do not wait too long to pull the trigger with a product launch.\" - Matt Brezina",
        steps: [

            {
                "question": "Has your team analyzed operational risks and prepared mitigating actions?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 1
                },
                "answers": [{
                    "value": "Yes",
                    "required": true
                },
                    {
                        "value": "No",
                        "required": false
                    }
                ]
            },
            {
                "question": "Does your team have a viable marketing strategy?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 1
                },
                "answers": [{
                    "value": "Yes",
                    "required": true
                },
                    {
                        "value": "No",
                        "required": false
                    }
                ]
            },
            {
                "question": "Has your solution been launched successfully?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 2
                },
                "answers": [{
                    "value": "Yes",
                    "required": true
                },
                    {
                        "value": "No",
                        "required": false
                    }
                ]
            }
        ]
    };

    return (
        <PhaseView phase={launchPhase}/>
    )
};