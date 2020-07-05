import React from "react";
import {PhaseView} from "../../components/phaseView";
import {Phase} from "../../utils/interfaces";

export default function Research () {
    const researchPhase: Phase = {
        type: "Research",
        motivation: "\"Research is formalized curiosity. It is poking and prying with a purpose. \" - Zora Neale Hurston",
        steps: [
            {
                "question": "Does your team understand what the customers' want to achieve?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 1
                },
                "answers": [
                    {
                        "value": "Yes",
                        "required": true
                    },
                    {
                        "value": "No",
                        "required": false
                    }
                ],
                "bestPractice": [
                    {
                        "url": "https://hbr.org/2016/09/know-your-customers-jobs-to-be-done",
                        "description": "Learn how to understand what customers actually want to achieve by using the Jobs-to-be done-framework and interview method:"
                    },
                    {
                        "url": "https://sergioschuler.com/using-jobs-to-be-done-in-qualitative-interviews-80e73050d629",
                        "description": ""
                    }
                ]
            },
            {
                "question": "Are customers unhappy with the current solutions?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 3
                },
                "answers": [
                    {
                        "value": "Yes",
                        "required": true
                    },
                    {
                        "value": "No",
                        "required": false
                    }
                ],
                "bestPractice": [
                    {
                        "url": "https://corporatefinanceinstitute.com/resources/knowledge/other/measuring-customer-satisfaction/",
                        "description": "Learn why psychological safety is necessary to enable high-performing teams and how to create it"
                    }
                ]
            },
            {
                "question": "Does your team understand what is possible to deliver?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 1
                },
                "answers": [
                    {
                        "value": "Yes",
                        "required": true
                    },
                    {
                        "value": "No",
                        "required": false
                    }
                ],
            },
            {
                "question": "Is it possible that your team is able to deliver a solution that meets demand?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 3
                },
                "answers": [
                    {
                        "value": "Yes",
                        "required": true
                    },
                    {
                        "value": "No",
                        "required": false
                    }
                ],
            },
            {
                "question": "Does the team understand what customers are willing to pay and what it costs to deliver a solution?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 1
                },
                "answers": [
                    {
                        "value": "Yes",
                        "required": true
                    },
                    {
                        "value": "No",
                        "required": false
                    }
                ],
                "bestPractice": [
                    {
                        "url": "https://medium.com/swlh/how-to-estimate-customer-demand-and-willingness-to-pay-b1d14ee4f806",
                        "description": "Learn how to estimate customers demand and willingness to pay for a solution:"
                    }
                ]
            },
            {
                "question": "Is it possible that your team is able to deliver a solution profitably?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 3
                },
                "answers": [
                    {
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
        <PhaseView phase={researchPhase}/>
    )
};