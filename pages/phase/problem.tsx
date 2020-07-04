import React from "react";
import {PhaseView} from "../../components/phaseView";
import {Phase} from "../../utils/interfaces";

export default function Problem () {
    const problemPhase: Phase = {
        type: "Problem",
        motivation: "Lorem ipsum",
        steps: [
            {
                "question": "What is the problem you aim to solve?",
                "answerType": "TEXT",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 5
                },
                "bestPractice": "bla bla bla"
            },
            {
                "question": "Have you thought about something important?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 1
                },
                "answers": [
                    {
                        "value": "Ja",
                        "required": true
                    },
                    {
                        "value": "Nei",
                        "required": false
                    }
                ]
            }/*,
            {
                "question": "Which of the following roles do you have in the team?",
                "answerType": "MULTI",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 3
                },
                "answers": [
                    {
                        "value": "Developer",
                        "required": true
                    },
                    {
                        "value": "Designer",
                        "required": true
                    },
                    {
                        "value": "Criminal",
                        "required": false
                    }
                ],
                "bestPractice": "criminals may not be recommended"
            }*/
        ]
    };

    return (
        <PhaseView phase={problemPhase}/>
    )
};