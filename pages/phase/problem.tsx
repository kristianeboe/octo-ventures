import React from "react";
import {PhaseView} from "../../components/phaseView";
import {Phase} from "../../utils/interfaces";

export default function Problem () {
    const problemPhase: Phase = {
        type: "Problem",
        motivation: "Lorem ipsum",
        steps: [
            {
                "question": {
                    "question": "What is the problem you aim to solve?",
                    "type": "TEXT"
                },
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 5
                },
                "bestPractice": "bla bla bla"
            },
            {
                "question": {
                    "question": "Who has the problem?",
                    "type": "TEXT"
                },
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 1
                }
            },
            {
                "question": {
                    "question": "Blir det bra?",
                    "type": "BOOLEAN",
                    "answerOptions": ["Ja", "Nei"],
                    "correctAnswer": "Ja"
                },
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 1
                }
            }
        ]
    };

    return (
        <PhaseView phase={problemPhase}/>
    )
};