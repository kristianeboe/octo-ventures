import React from "react";
import {PhaseView} from "../../components/phaseView";
import {Phase} from "../../utils/interfaces";

export default function Solution () {
    const solutionPhase: Phase = {
        type: "Solution",
        motivation: "Lorem ipsum",
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
            },
            {
                "question": "Have you generated ideas for a solution customers want, your team is able to deliver and that can be profitable?",
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
                ],
                "bestPractice": [{
                    "url": "https://www.cleverism.com/18-best-idea-generation-techniques/",
                    "description": "Learn how to generate better ideas to boost creativity and develop better solutions:"
                }]
            },

            {
                "question": "Have you actively engaged customers when developing the solution?",
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
                ],
                "bestPractice": [{
                    "url": "https://www.visioncritical.com/blog/customer-centric-product-development-examples",
                    "description": "Learn why customer engagement is key to develop successful products and how to involve them in the process:"
                }]
            },

            {
                "question": "Have you validated that customers want your solution?",
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
                    "url": "https://www.fundable.com/learn/resources/guides/startup/validate-your-solution",
                    "description": "Learn the best methods how to validate your solution and ensure that you have a business idea:"
                }]
            },

            {
                "question": "Have you validated that your target group is willing to pay more than it costs to deliver your solution?",
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
                ]
            },

            {
                "question": "Do you have a viable business model?",
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
                    "url": "https://www.forbes.com/sites/martinzwilling/2011/01/29/ten-questions-to-ensure-a-viable-business-model/#1b11a228b02e",
                    "description": "Learn the key elements in your business model and how to validate its viability:"
                }]
            },

            {
                "question": "Is your solution more attractive than the competition?",
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
                ],
                "bestPractice": [{
                    "url": "https://www.bdc.ca/en/articles-tools/marketing-sales-export/marketing/pages/how-evaluate-competition.aspx",
                    "description": "Learn how to run a competitor analysis and ensure that your solution stand out in the market:"
                }]
            },

            {
                "question": "Is your team able to collect and analyze data to improve the solution?",
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
                    "url": "https://www.lotame.com/what-are-the-methods-of-data-collection/",
                    "description": "Learn how to collect and analyze data to improve your solution to better serve your customers:"
                },
                    {
                        "url": "https://www.surveymonkey.com",
                        "description": "Use a simple survey tool to collect customer data"
                    }
                ]
            },

            {
                "question": "Is your solution scalable?",
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
                ]
            },

            {
                "question": "Have you developed an attractive brand?",
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
                ],
                "bestPractice": [{
                    "url": "https://www.designhill.com/design-blog/key-elements-that-will-help-you-build-a-memorable-brand/",
                    "description": "Learn the key elements to develop a memorable brand:"
                }]
            }
        ]
    };

    return (
        <PhaseView phase={solutionPhase}/>
    )
};