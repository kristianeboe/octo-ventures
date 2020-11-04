export const scalePhase =
    {
        "id": "2fea5173-cb53-41ad-912d-025c7954b1ad",
        "name": "6. Scale the company",
        "order": 5,
        "steps": [
            {
                "id": "813f4964-8e84-4673-a062-f46a7b0390f1",
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
                "bestPractice": {
                    "description": "Converting talented people into dedicated employees, complementary businesses into value creating partnerships and high-quality investors into shareholders are key ingredients in the scale-up recipe.\nSuch access depends on developing and communicating a long-term strategy for value creation, which [has proven to deliver cumulative growth above average of 36% and 81% for revenue and economic profit], respectively.\nTurn this recipe into a tasteful soup by applying a [framework for measuring long-term value creation and engaging with your corporate stakeholders].",
                    "urls": ["https://www.mckinsey.com/featured-insights/long-term-capitalism/where-companies-with-a-long-term-view-outperform-their-peers", "https://www.fcltglobal.org/wp-content/uploads/straight-talk_in-depth_vfo3363494db5326c50be1cff0000423a91.pdf"]
                }
            },

            {
                "id": "a11638fc-9a6e-4472-aa7f-a2653b758acc",
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
                "bestPractice":
                    {
                        "description": "The definition of a constraint is something that imposes a limit or restriction or that prevents something from occurring.\nTheory of Constraints is a methodology for identifying and managing the most important limiting factor. It was originally applied to industrial manufacturing in the 1980s and has since inspired leading software development methodologies and management systems, notably DevOps and Agile.\nLearn how to [use the Theory of Constraints framework to unlock your start-ups’ growth potential].",
                        "urls": ["https://www.leanproduction.com/theory-of-constraints.html"]
                    },
            }
        ]
    };
