import React from "react";
import {PhaseView} from "../../components/phaseView";
import {Phase} from "../../utils/interfaces";

export default function Problem () {
    const problemPhase: Phase = {
        type: "Problem",
        motivation: "Lorem ipsum",
        steps: [
            {
                "question": "Who has the problem?",
                "answerType": "TEXT",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 1
                },
                "bestPractice": [
                    {
                        "url": "https://80000hours.org/",
                        "description": "Find a problem worth solving:"
                    },
                    {
                        "url": "https://sustainabledevelopment.un.org/?menu=1300",
                        "description": ""
                    },
                    {
                        "url": "https://hbr.org/2012/09/are-you-solving-the-right-problem",
                        "description": ""
                    }
                ]
            },

            {
                "question": "Who has the problem?",
                "answerType": "TEXT",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 1
                },
                "bestPractice": [
                    {
                        "url": "https://blog.hubspot.com/marketing/buyer-persona-definition-under-100-sr?hubs_signup-url=blog.hubspot.com%2Fmarketing%2Fmarket-research-buyers-journey-guide&hubs_signup-cta=null",
                        "description": "Understand who has the problem to define a high level target group:"
                    }
                ]
            }
        ]
    };

    return (
        <PhaseView phase={problemPhase}/>
    )
};