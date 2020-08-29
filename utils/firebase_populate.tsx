import { v4 as uuidv4 } from 'uuid';

const p = {
    "Develop": [
        {
            "question": "Have you generated ideas for a solution customers want, your team is able to deliver and that can be profitable?",
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
                    "url": "https://www.cleverism.com/18-best-idea-generation-techniques/",
                    "description": "Learn how to generate better ideas to boost creativity and develop better solutions:"
                }
            ]
        },
        {
            "question": "Have you actively engaged customers when developing the solution?",
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
            ],
            "bestPractice": [
                {
                    "url": "https://www.visioncritical.com/blog/customer-centric-product-development-examples",
                    "description": "Learn why customer engagement is key to develop successful products and how to involve them in the process:"
                }
            ]
        },
        {
            "question": "Have you validated that customers want your solution?",
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
                    "url": "https://www.fundable.com/learn/resources/guides/startup/validate-your-solution",
                    "description": "Learn the best methods how to validate your solution and ensure that you have a business idea:"
                }
            ]
        },
        {
            "question": "Have you validated that your target group is willing to pay more than it costs to deliver your solution?",
            "answerType": "BOOLEAN",
            "scoringFunction": {
                "companyValueIncrement": 0,
                "companySuccessRateIncrement": 4
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
            "question": "Do you have a viable business model?",
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
                    "url": "https://www.forbes.com/sites/martinzwilling/2011/01/29/ten-questions-to-ensure-a-viable-business-model/#1b11a228b02e",
                    "description": "Learn the key elements in your business model and how to validate its viability:"
                }
            ]
        },
        {
            "question": "Is your solution more attractive than the competition?",
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
            ],
            "bestPractice": [
                {
                    "url": "https://www.bdc.ca/en/articles-tools/marketing-sales-export/marketing/pages/how-evaluate-competition.aspx",
                    "description": "Learn how to run a competitor analysis and ensure that your solution stand out in the market:"
                }
            ]
        },
        {
            "question": "Is your team able to collect and analyze data to improve the solution?",
            "answerType": "BOOLEAN",
            "scoringFunction": {
                "companyValueIncrement": 0,
                "companySuccessRateIncrement": 4
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
            "question": "Have you developed an attractive brand?",
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
            ],
            "bestPractice": [
                {
                    "url": "https://www.designhill.com/design-blog/key-elements-that-will-help-you-build-a-memorable-brand/",
                    "description": "Learn the key elements to develop a memorable brand:"
                }
            ]
        }
    ],
    "Launch": [
        {
            "question": "Has your team analyzed operational risks and prepared mitigating actions?",
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
            "question": "Does your team have a viable marketing strategy?",
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
            "question": "Has your solution been launched successfully?",
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
    ],
    "Problem": [
        {
            "question": "What is the problem you aim to solve?",
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
    ],
    "Research": [
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
            ]
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
            ]
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
    ],
    "Scale": [
        {
            "question": "Do you have access to talent, partners and capital?",
            "answerType": "BOOLEAN",
            "scoringFunction": {
                "companyValueIncrement": 0,
                "companySuccessRateIncrement": 4
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
                    "url": "https://www.fcltglobal.org/wp-content/uploads/straight-talk_in-depth_vfo3363494db5326c50be1cff0000423a91.pdf",
                    "description": "Learn how a structured approach to creating and communicating long term value creation can enable investments:"
                }
            ]
        },
        {
            "question": "Does the team know how to identify and prioritize constraints to scale?",
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
                    "url": "https://www.leanproduction.com/theory-of-constraints.html",
                    "description": "Learn how to use the Theory of Constraints framework to unlock growth:"
                }
            ]
        }
    ],
    "teamSteps": [
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
            ]
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
            ]
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


export async function populateDB() {
    let steps = {};
    let phases =  {};
    
    for (const key in p) {
        phases[key] = [];
        phases[key].id = uuidv4()
        let phase = p[key];
        phase.forEach(step => {
            step.id = uuidv4();
            steps[step.id] = step;
            phases[key].push(step.id);
        });
    }

}

//Push steps and phases to firebase