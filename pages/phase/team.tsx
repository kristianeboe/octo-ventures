import {PhaseView} from "../../components/phaseView";
import React from "react";
import {Phase} from "../../utils/interfaces";

export default function Team () {
    const teamPhase: Phase = {
        type: "Team",
        motivation: "\"Coming together is a beginning. Keeping together is progress. Working together is success.\" - Henry Ford",
        steps: [
            {
                "question": "What are the principles for decision making in your team?",
                "answerType": "MULTI",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 3
                },
                "answers": [
                    {
                        "value": "Transparency",
                        "required": true
                    },
                    {
                        "value": "De-centralized",
                        "required": true
                    },
                    {
                        "value": "Scientific method",
                        "required": true
                    }
                ],
                "bestPractice": [
                    {
                        "url": "https://www.linkedin.com/pulse/work-principle-1-trust-radical-truth-transparency-ray-dalio/",
                        "description": "How Bridgewater Capital built a culture around radical transparency to outperform the market:"
                    },
                    {
                        "url": "https://www.scaledagileframework.com/decentralize-decision-making/",
                        "description": ""
                    }
                ]
            },

            {
                "question": "Is every team member highly committed to solve the problem?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 5
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
            },

            {
                "question": "Do your team members have perseverance and passion for long-term goals?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 5
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
            },

            {
                "question": "Do your team members have an agile mindset?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 2
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
            },

            {
                "question": "What experience do your team members have?",
                "answerType": "MULTI",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 6
                },
                "answers": [
                    {
                        "value": "Higher education",
                        "required": true
                    },
                    {
                        "value": "Entrepreneurial experience",
                        "required": true
                    },
                    {
                        "value": "Work experience",
                        "required": true
                    }
                ],
            },
            {
                "question": "Which disciplines are represented on your team?",
                "answerType": "MULTI",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 4
                },
                "answers": [
                    {
                        "value": "Business",
                        "required": true
                    },
                    {
                        "value": "Technological",
                        "required": true
                    },
                    {
                        "value": "Design",
                        "required": true
                    }
                ],
            },
            {
                "question": "Which personalities are represented on your team?",
                "answerType": "MULTI",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 2
                },
                "answers": [
                    {
                        "value": "Dominant",
                        "required": true
                    },
                    {
                        "value": "Influential",
                        "required": true
                    },
                    {
                        "value": "Steady",
                        "required": true
                    },
                    {
                        "value": "Conscientious",
                        "required": true
                    }
                ],
                "bestPractice": [
                    {
                        "url": "https://www.crystalknows.com/",
                        "description": "Analyze your team members personality"
                    },
                    {
                        "url": "https://www.crystalknows.com/disc-personality-test#assessment",
                        "description": "Learn about how DISC can teach your team the value of empathy:"
                    }
                ]
            },

            {
                "question": "Does your team have an inspiring vision?",
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
            },

            {
                "question": "Does the team have relevant KPIs?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 2
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
            },

            {
                "question": "Is the team measured regularly on set KPIs?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 2
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
            },

            {
                "question": "Do you have team-based rewards?",
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
                ]
            },

            {
                "question": "Does your team consist of people that are in the target group?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 2
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
            },

            {
                "question": "Does your team communicate regularly?",
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
                ]
            },
            {
                "question": "Does your team members document what they learn and make it available for the team?",
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
                ]
            },

            {
                "question": "Does your team has psychological safety?",
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
                        "url": "https://hbr.org/2017/08/high-performing-teams-need-psychological-safety-heres-how-to-create-it",
                        "description": "Learn why psychological safety is necessary to enable high-performing teams and how to create it:"
                    }
                ]
            },
            {
                "question": "Does your team know how to facilitate performance at the highest level?",
                "answerType": "BOOLEAN",
                "scoringFunction": {
                    "companyValueIncrement": 0,
                    "companySuccessRateIncrement": 2
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
        <PhaseView phase={teamPhase}/>
    )
};