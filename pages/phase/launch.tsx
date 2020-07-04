import {PhaseView} from "../../components/phaseView";
import React from "react";
import {Phase} from "../../utils/interfaces";

export default function Launch () {
    const launchPhase: Phase = {
        type: "Launch",
        motivation: "Lorem ipsum",
        steps: [
            {
                "question": "Do you have access to talent, partners and capital?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 4
                },
                "answers": [{
                    "value": "Yes",
                    "required": true
                },
                    {
                        "value": "No",
                        "required": false
                    }
                ],
                "bestPractice": [{
                    "url": "https://www.fcltglobal.org/wp-content/uploads/straight-talk_in-depth_vfo3363494db5326c50be1cff0000423a91.pdf",
                    "description": "Learn how a structured approach to creating and communicating long term value creation can enable investments:"
                }]
            },

            {
                "question": "Does the team know how to identify and prioritize constraints to scale?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 3
                },
                "answers": [{
                    "value": "Yes",
                    "required": true
                },
                    {
                        "value": "No",
                        "required": false
                    }
                ],
                "bestPractice": [{
                    "url": "https://www.leanproduction.com/theory-of-constraints.html",
                    "description": "Learn how to use the Theory of Constraints framework to unlock growth:"
                }]
            }
        ]
    };

    return (
        <PhaseView phase={launchPhase}/>
    )
};