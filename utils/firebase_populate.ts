import { v4 as uuidv4 } from 'uuid';
import { firestore } from '../config/firebase';

const p = {
    "Problem": [

        {
            "question": "What is the problem you aim to solve?",
            "answerType": "TEXT ",
            "scoringFunction": {
                "companyValueIncrement": 0,
                "companySuccessRateIncrement": 1
            },
            "bestPractice": {
                "description": "A strong problem definition consists of an issue that needs to be dealt with, and [it can be summed up in one sentence] that everyone can immediately understand. [Preferably, your problem is urgent, frequent, millions of people have it, its growing fast and its cost is significant].\nThe most common reason why start-ups fail is that they create something people don’t need – [as much as 42% of start-up failures are due to this particular reason], according to CB Insights.\nSo, start with a real problem, not the solution, and, knowing it’s hard to solve problems at scale, make sure it’s a problem really worth solving. If you’re still looking for a problem, [80,000 hours] and [UN Global Issues Overview] are great starting points.",
                "urls": ["https://hbr.org/2012/09/are-you-solving-the-right-problem", "https://hackernoon.com/the-problemeter-a-sheet-that-helps-startups-solve-the-right-problem-qy7o34wv", "https://www.cbinsights.com/research/startup-failure-reasons-top/", "https://80000hours.org/", "https://www.un.org/en/sections/issues-depth/global-issues-overview/"]
            }
        },

        {
            "question": "Who has the problem?",
            "answerType": "TEXT",
            "scoringFunction": {
                "companyValueIncrement": 0,
                "companySuccessRateIncrement": 1
            },
            "bestPractice":
                {
                    "description": "To come up with the most effective and relevant solution, you must (get to) know your users and/or customers and their needs.\nTo effectively share the knowledge about those who have the problem, establish [the metrics that define your target group].",
                    "urls": ["https://blog.hubspot.com/marketing/buyer-persona-definition-under-100-sr?hubs_signup-url=blog.hubspot.com%2Fmarketing%2Fmarket-research-buyers-journey-guide&hubs_signup-cta=null"]
                }
        },

        {
            "question": "How many has the problem?",
            "answerType": "TEXT",
            "scoringFunction": {
                "companyValueIncrement": 0,
                "companySuccessRateIncrement": 1
            },
            "bestPractice":
                {
                    "description": "Knowing the number of potential users and/or customers is a critical component in establishing your addressable market.\nMake sure to master [secondary market research] to get to a basic understanding of your start-ups’ potential.",
                    "urls": ["https://www.entrepreneur.com/encyclopedia/secondary-market-research"]
                }
        },

        {
            "question": "How often do they have the problem?",
            "answerType": "TEXT",
            "scoringFunction": {
                "companyValueIncrement": 0,
                "companySuccessRateIncrement": 1
            },
            "bestPractice":
                {
                    "description": "Problems can occur in different frequencies. Some may be daily, while others may be once a year. This affects both the willingness to find solutions and willingness to pay.\nKey metrics include how often the customer has the problem and how large the problem is, which gets you closer to define your start-ups’ potential for value creation.\nListen to [Y Combinator’s talk] on how to understand the frequency of the customer’s problem and how this affects the potential for value creation.",
                    "urls": ["https://www.youtube.com/watch?v=C27RVio2rOs"]
                }
        },

        {
            "question": "What are they willing to pay for your solution?",
            "answerType": "TEXT",
            "scoringFunction": {
                "companyValueIncrement": 0,
                "companySuccessRateIncrement": 1
            },
            "bestPractice":
                {
                    "description": "To create a sustainable business, someone must be [willing to pay] for a solution to their problem. Either in the form of money or their time and engagement, which you can eventually monetize.\nWhether people are willing to pay [USD 1 or USD 10,000 for a solution has significant impact on your potential for value creation].\nThe final element of your market potential is to understand the intensity or the cost of the problem. Early on, an efficient way to come up with an estimate of willingness to pay is using the role of thumb that your customers would want 5x return, meaning their willingness to pay is 20% of the cost of the problem. Alternatively, [benchmark against existing solutions].\nThe formula: Number of people x frequency x intensity = addressable market",
                    "urls": ["https://marketbusinessnews.com/financial-glossary/willingness-pay-definition-meaning/", "https://www.sequoiacap.com/article/pricing-your-product/"]
                }
        }
    ],
    "Team": [
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
            "bestPractice":
                {
                    "description": "Transparency is a fundamental part of an inclusive culture practicing openness and honesty. De-centralized decision means that the decision-making authority is distributed across the team. Scientific method is systematic observation, measurement, and experiment, and the formulation, testing, and modification of hypotheses.\n[Learn how radical transparency can be used to outperform the market], [why and how to de-centralize decision making] and [how to increase effectiveness and efficiency by using the scientific method].",
                    "urls": ["https://www.linkedin.com/pulse/work-principle-1-trust-radical-truth-transparency-ray-dalio/", "https://www.scaledagileframework.com/decentralize-decision-making/", "https://whydoscientists.org/the-scientific-method/"]
                }
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
            ],
            "bestPractice":
                {
                    "description": "To succeed in the long run, assemble a team with a common commitment to the problem you aim to solve.\nBeing committed to solving the problem increases [focus, efficiency and resilience].\nLook for people with track record for trying to solve the problem in another setting when recruiting. To test commitment, give the team a challenge in a smaller scale – e.g. spending a Sunday providing homeless people with food if hunger is the problem you aim to solve at scale. If they feel energized by the task, it’s a clear sign of commitment to the problem.",
                    "urls": ["https://genius.com/Alfred-lin-lecture-10-company-culture-and-building-a-team-part-i-annotated"]
                }
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
            ],
            "bestPractice":
                {
                    "description": "Perseverance and passion are related to your teams' level of grit, meaning the ability to maintain a goal focused effort for extended periods of time.\nGrit, in this definition, is shown to have a [positive impact on entrepreneurial success] and is correlated with venture growth.\nTo develop an organizational grit, use questionnaires designed to [identify gritty individuals, set targets for improvement and track progress].",
                    "urls": ["https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4737958/#R3", "https://hbr.org/2018/09/organizational-grit"]
                },
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
            ],
            "bestPractice":
                {
                    "description": "The agile mindset is the ability to collaborate in iterations with frequent feedbacks, view setbacks as a learning opportunity and a focus on delivering value quickly.\nWhile agile is applicable to all areas of start-up organizations, it has [significantly improved time to market, productivity, employee satisfaction while also reducing costs in software development].\nLearn the [key elements and steps] you need to take in order to achieve an agile mindset among the team members.",
                    "urls": ["https://www.atlassian.com/agile/advantage/agile-is-a-competitive-advantage", "https://www.forbes.com/sites/stevedenning/2019/08/13/understanding-the-agile-mindset/"]
                }
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
            "bestPractice":
                {
                    "description": "University-level education, previous founders and professional work experience are backgrounds that, according to [scientific research], can positively impact your start-up team’s chance of success.\nLeverage the experience from other start-up successes on [how to find the right co-founders through a 5-step process], and, as a bonus, [learn how to convince someone to join your start-up]. To do this at scale, [add digital talent sourcing services] to your toolkit.",
                    "urls": ["https://www.researchgate.net/publication/310748471_Critical_Success_Factors_of_the_Survival_of_Start-Ups_with_a_Radical_Innovation", "https://firstround.com/review/the-founder-dating-playbook-heres-the-process-i-used-to-find-my-co-founder/", "https://www.youtube.com/watch?v=N8deM6B4eE4", "https://quip.com/wuTHAU3kmiKh"]
                }
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
            "bestPractice":
                {
                    "description": "A multidisciplinary team entails all the skills required to effectively develop scalable solutions, notably business, tech and design. Industry expertise delivers added benefit in form of speed, as they already know the landscape you are exploring.\nMultidisciplinary teams have proven to deliver [more than 50% improvement in time to market, 3-4x increase in speed to revenue, cost decreases of 25% and 50% increase in quality in various case studies].\nStart with people in your network that you already trust, and expand your search by using [co-founders matchmaking services]. Ideally, your team members have basic [knowledge of all the required areas of expertise]. If your team consists exclusively of specialists, make them work in pairs for efficient knowledge transfer.",
                    "urls": ["https://www.bcg.com/publications/2019/agile-works-measuring-impact", "https://cofounderslab.com/?from=founderdating", "https://www.lode-consulting.com/multidisciplinary-teams-in-scrum/"]
                }
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
            "bestPractice":
                {
                    "description": "Personality is a person’s characteristic way of thinking, feeling, and behaving.\nHaving a mix of personality types [increases team effectiveness].\n[Test your team members’ personality and explore how to use the insight] to increase efficiency as a team.",
                    "urls": ["https://hbr.org/2017/01/great-teams-are-about-personalities-not-just-skills", "https://www.crystalknows.com/disc/types"]
                }
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
            ],
            "bestPractice":
                {
                    "description": "A vision statement is an inspirational statement of an idealistic future of a company or group.\nEven before you have developed a solution, the vision can help [attract talent, partners and capital] at lower cost.\n[A vision needs to be concise, clear, future-oriented, challenging and inspiring].",
                    "urls": ["https://hbr.org/2007/10/the-importance-of-vision", "https://www.projectmanager.com/blog/guide-writing-perfect-vision-statement-examples"]
                }
        },

        {
            "question": "Does your team have established relevant KPIs?",
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
            "bestPractice":
                {
                    "description": "A key performance indicator (KPI) is a measurable indicator on how a company performs on fundamental business objectives.\nKPIs helps [you identify and keep track on common goals and thus increase overall effectiveness].\nYour KPIs should help you track value creation for customers, employees, shareholders and the society at large. [Learn how to identify relevant KPIs] and make them [trackable, set goals and review your progress].",
                    "urls": ["https://www.forbes.com/sites/forbesfinancecouncil/2020/05/18/what-are-your-kpis-and-why-do-they-matter/#1d061dee7e99", "https://www.pwc.com/gx/en/audit-services/corporate-reporting/assets/pdfs/uk_kpi_guide.pdf", "https://www.youtube.com/watch?v=lL6GdUHIBsM"]
                }
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
            ],
            "bestPractice":
                {
                    "description": "KPI’s are feedbacks that needs to be tracked over time to have impact on your team’s behavior and actions.\nKPI’s can differ based on what they are measuring, and that should affect how regularly they are measured and how often action is taken.\nThe determining factors for how to decide KPIs measuring frequency is related to [how sensitive, urgent, costly and accurate the results are].",
                    "urls": ["https://kpilibrary.com/topics/how-often-should-you-track-your-measures"]
                }
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
            ],
            "bestPractice":
                {
                    "description": "Team-based rewards are formal incentives provided to a team based on performances.\n[Team-based rewards has proven effect on fostering collaboration and teamwork], allow team goals to be clearly integrated with organizational objectives and provide incentive for the whole team to improve.\nTeam financial incentives or equity bonuses is often making the team members do what it takes to succeed and [in smaller teams you may want to apply one of these].",
                    "urls": ["https://www.sesp.northwestern.edu/masters-learning-and-organizational-change/knowledge-lens/stories/2011/team-based-rewards.html", "https://scienceforwork.com/blog/how-to-use-team-rewards-effectively/"]
                }
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
            ],
            "bestPractice":
                {
                    "description": "Having one or more team members in your target group implies that they share views on the problem with the potential customers that currently look for a solution.\nAlthough only 10.7 % of all start-ups are founded by “users”, [they made up nearly half of the startups that survived beyond five years]. Additionally, entrepreneurs in the target group lands more venture capital than start-ups overall.\nTo test your team, ask them if they are themselves looking for a solution to the problem you aim to solve.",
                    "urls": ["https://www.kauffman.org/entrepreneurship/reports/kauffman-firm-survey-series/the-kauffman-firm-survey-who-are-user-entrepreneurs-findings-on-innovation-founder-characteristics-and-firm-characteristics/"]

                }
        },

        {
            "question": "Does your team communicate effectively?",
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
            "bestPractice":
                {
                    "description": "Team communication defines all interactions and exchanges of information that happens in a group of people who work for a common goal or output.\nTeams that communicate well [complete tasks quicker, more efficient and are more accurate in their work than other].\nPractice [these strategies] to help your team to communicate in a more effective way.",
                    "urls": ["https://careertrend.com/why-is-team-communication-important-when-in-teams-4233172.html", "https://scienceforwork.com/blog/team-communication/"]
                }
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
            ],
            "bestPractice":
                {
                    "description": "Documentation of decisions, processes and results amplify your team’s ability to make better decisions.\nIn addition, [developing and sharing best practices] increases your team’s effectiveness and efficiency.\nSetting up a [cloud infrastructure is an effective platform for sharing team learnings].",
                    "urls": ["https://www.nccmt.ca/knowledge-repositories/search/84", "https://medium.com/@FedakV/how-cloud-computing-and-storage-can-help-startups-bf8b30cc0bc0"]
                }
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
            "bestPractice":
                {
                    "description": "Psychological safety is being able to show and employ one's self without fear of negative consequences of self-image, status or career.\nPsychological safety is the most important dynamic in a high-performing team, proving to [increase creativity, revenue and effectiveness by 2x].\n[Learn more about why psychological safety is necessary] to enable high-performing teams and how to create it.",
                    "urls": ["https://rework.withgoogle.com/blog/five-keys-to-a-successful-google-team/", "https://hbr.org/2017/08/high-performing-teams-need-psychological-safety-heres-how-to-create-it?registration=success"]
                }
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
            ],
            "bestPractice":
                {
                    "description": "Unleashing human potential consists of two factors, what your team members can do as individuals and what they are able to do as a team.\nWhy performance at the highest level? To secure a sustainable future for all, [we need to solve a myriad of important problems], and high performing [entrepreneurs can have significant positive impact].\nUnderstand the impact of the outliers’ mindset, learn the techniques of the top performers in the world’s most competitive fields and employ the productivity hacks that have inspired entrepreneurs for over a decade to enable problem solving at scale.",
                    "urls": ["https://sustainabledevelopment.un.org/?menu=1300", "https://a16z.com/2020/04/18/its-time-to-build/", "https://blog.samaltman.com/how-to-be-successful", "https://getlighthouse.com/blog/high-performing-leaders-secret/", "https://www.shortform.com/summary/the-4-hour-workweek-summary-tim-ferriss?gclid=Cj0KCQjw-af6BRC5ARIsAALPIlWapoRxfX5BVdK_xqkcT3POYsPVczTlXvy9k5pk67w5S5Ij4jSyFD8aAoSeEALw_wcB"]
                }
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
            "bestPractice": {
                "description": "Customers don’t care about products. They care about what it helps them to achieve.\nApplying this principle has proven to yield [5x the success rate] in creating predictable and profitable innovations.\nLearn how [the jobs-to-be-done methodology] can help you [understand customer needs] and become great at developing solutions that people actually will buy or use.",
                "urls": ["https://jobs-to-be-done.com/outcome-driven-innovation-odi-is-jobs-to-be-done-theory-in-practice-2944c6ebc40e", "https://hbr.org/2016/09/know-your-customers-jobs-to-be-done", "https://sergioschuler.com/using-jobs-to-be-done-in-qualitative-interviews-80e73050d629"]
            }
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
            "bestPractice":
                {
                    "description": "Customer satisfaction is the degree to which solutions provided by a company meet a customer’s expectations.\nIf there are customers that have already paid for a solution, which they are unhappy with, it is a validation of underpenetrated demand. If you can bring the solution that turns a customer from unhappy to happy, you can create deep loyalty. Keep in mind [that it’s significantly cheaper] to retain customers than acquire new ones.\nFind out how customers rate current solutions by [applying effective methods of how to measure customer satisfaction].",
                    "urls": ["https://www.dcrstrategies.com/customer-incentives/5-reasons-customer-retention-business/", "https://corporatefinanceinstitute.com/resources/knowledge/other/measuring-customer-satisfaction/"]

                }
        },

        {
            "question": "Is your team able to deliver a solution that solves the problem?",
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
            "bestPractice":
                {
                    "description": "A feasibility study is an assessment of the practicality of a solution.\nFeasibility studies are crucial to ensure that the team has a realistic plan and proceed only if the team is able to deliver on it. The information you gather will help to [identify all the things you need to make a business work].\n[Learn how to test the feasibility] of your business.",
                    "urls": ["https://www.thebalancecareers.com/what-is-a-feasibility-study-3514853", "https://www.caycon.com/blog/how-to-test-feasibility-business-concept"]
                }
        },

        {
            "question": "Does the team understand what customers are willing to pay and what it costs to deliver a solution?",
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
            "bestPractice":
                {
                    "description": "Customer willingness to pay (WTP) estimates how much a given customer would be willing to pay for a solution.\nAnalysis of both cost and WTP is needed to really understand whether a firm has a competitive advantage which is defined as a wider gap between cost and willingness to pay than competitors.\nExperiment with a range of proven methodologies to [estimate customers’ demand and willingness to pay] for a solution.",
                    "urls": ["https://medium.com/swlh/how-to-estimate-customer-demand-and-willingness-to-pay-b1d14ee4f806"]
                }
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
            ],
            "bestPractice":
                {
                    "description": "Profitability is the ability of the company to utilize its resources in such a way that it can generate more revenue than it must pay in expenses.\nA profitability analysis helps your business to identify growth opportunities. Profitability analysis can spell the difference between shutting down and keeping afloat.\nBuild an [Excel model to evaluate your business case], and share the insight with your team to ensure everyone is onboard in creating a financially sustainable business.",
                    "urls": ["https://corporatefinanceinstitute.com/resources/knowledge/modeling/valuation-modeling-in-excel/"]
                }
        }
    ],
    "Develop": [
        {
            "question": "Do you have an idea for a solution that customers want, your team is able to deliver and that can be profitable?",
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
            "bestPractice":
                {
                    "description": "Picking the right idea is fundamental to develop a successful business. Making use of ideation to address a specific problem can aid the team in the process of coming up with an outstanding idea.\nTo maximize your chance of creating a great idea, you need to generate lots of ideas. To pick the right one, an [effective idea evaluation is critical].\n[Use ideation techniques in your team to generate better ideas, boost creativity and develop a winning solution].",
                    "urls": ["https://www.inc.com/matt-plummer/only-6-percent-of-ideas-become-commercial-successes-heres-how-to-increase-your-odds.html", "https://www.cleverism.com/18-best-idea-generation-techniques/"]
                }
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
            "bestPractice":
                {
                    "description": "Customer engagement is the ongoing interactions between company and customer, offered by the company, chosen by the customer.\nThe more customer involvement, [the greater your chance of developing a solution that provides more value and is superior in solving customer problems].\n[Plan your customer engagement to take place through a variety of formats], depending on the type of information you need.",
                    "urls": ["https://www.emeraldgrouppublishing.com/archived/learning/management_thinking/articles/npd.htm", "https://www.visioncritical.com/blog/customer-centric-product-development-examples"]
                }
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
            "bestPractice":
                {
                    "description": "Customer validation is a method to find evidence that you build a solution that customers actually want to use or buy.\nEarly customer validation allows you to predict whether your solution meets the customer’s needs and avoid failure before investing heavily in development. As a result, [customer validation can have significant impact] on return on investment (ROI).\nLearn the [most useful tools] for getting feedback about your solution and the potential market.",
                    "urls": ["https://www.centercode.com/blog/2017/08/five-ws-customer-validation", "https://www.oreilly.com/library/view/ux-for-lean/9781449335007/ch01.html"]
                }
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
            ],
            "bestPractice":
                {
                    "description": "Validating willingness to pay is the first step to get customers to commit to buying your product.\nValidating WTP can materially impact how effectively you spend your resources and your ability to attract resources, including external investments.\nExplore the [different tests that can help you efficiently validate WTP].",
                    "urls": ["https://guides.co/g/the-lean-validation-playbook/60801"]
                }
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
            "bestPractice":
                {
                    "description": "At its core, a business model describes how your business makes money. A viable business model means that your company is able to make a profit.\nA viable business model is [a key determinant] to succeed as a company and obtain funding to grow further.\nEnsure that you have a viable business model [with these 10 questions].",
                    "urls": ["https://learn.marsdd.com/article/business-models/", "https://www.forbes.com/sites/martinzwilling/2011/01/29/ten-questions-to-ensure-a-viable-business-model/#6f51e754b02e"]
                }
        },
        {
            "question": "Do you have a unique selling proposition?",
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
            "bestPractice":
                {
                    "description": "A unique selling proposition (USP) is the one thing that makes your solution better than the competition.\nOne of the biggest reasons businesses fails is that they are not able to [differentiate from the competitors] in the market. Knowing the right way to position yourself is thus crucial to stand out from the crowd.\nLearn what you need to know about your competitors through a [market research study]. Then look at [ten proven ways] on how to stand out and gain a competitive advantage.",
                    "urls": ["https://www.forbes.com/sites/ericwagner/2013/09/12/five-reasons-8-out-of-10-businesses-fail/#3dca14f46978", "https://www.entrepreneur.com/article/251686", "https://flybluekite.com/how-to-stand-out-from-competitors/"]
                }
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
            "bestPractice":
                {
                    "description": "Data collection is the process of gathering and measuring information with the aim of evaluating specific outcomes.\nIt is proven that data-driven organizations are [23x more likely to acquire customers, six times as likely to retain customers and 19x likely to be profitable as a result].\nLearn how to become a data driven organization and how to thrive your business with a [continuous data-driven business cycle].",
                    "urls": ["https://www.mckinsey.com/business-functions/marketing-and-sales/our-insights/five-facts-how-customer-analytics-boosts-corporate-performance", "https://managementevents.com/news/how-to-become-and-thrive-as-a-data-driven-organization/"]
                }
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
            ],
            "bestPractice":
                {
                    "description": "Scalable means that the solution can, with relative ease, be adapted to a wider use base than initially intended.\nScalability impacts [growth potential but also increases flexibility, versatility and agility].\nLearn the necessary steps to [evaluate your scalability and how to prepare your business to scale].",
                    "urls": ["http://www.magpress.com/blog/why-is-scalability-important-for-business", "https://sloanreview.mit.edu/article/building-scalable-business-models/"]
                }
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
            "bestPractice":
                {
                    "description": "Branding is the process of creating a strong, positive perception of your company and its solution in your customer’s mind.\nA strong brand increases your [ability to stand out from competition, increase your customer loyalty and pricing flexibility]. Strong brands also helps in attracting top talent.\nFollow [this guide] to create a unique and memorable brand in order to gain a competitive advantage.",
                    "urls": ["https://www.minddevelopmentanddesign.com/blog/brand-matters-business/", "https://www.crowdspring.com/blog/brand-identity/"]
                }
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
                    "description": "Operational risk summarizes the uncertainties a company faces in the course of conducting its daily business activities, procedures and systems.\nIdentifying risks and implementing mitigating actions can make your operations more efficient, enable strong growth and [prevent your business from going under].\nAs such, introducing a [structured approach to risk management] before launch is highly recommended.",
                    "urls": ["https://www.caycon.com/what-kills-startups", "https://www.fundingsavvy.com/blog/2018/02/26/how-to-calculate-risk-for-a-startup-business/"]
                }
        },

        {
            "question": "Does your team have a viable launch strategy?",
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
            "bestPractice":
                {
                    "description": "A viable launch strategy entails the critical steps required for bringing your solution to the first (paying) customers.\nThe launch of your solution is a defining moment in your startups’ life, where doubters can be turned into believers and vice versa.\nAim for an [epic launch], where customers have been properly groomed and word of mouth make your solution scale.",
                    "urls": ["https://www.disruptiveadvertising.com/business/business-launch-checklist/"]
                }
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
            ],
            "bestPractice":
                {
                    "description": "Defining the level of success at launch, requires measurable KPIs and access to relevant data.\nFailing to measure how the market receive your solutions, will significantly reduce your ability to effectively prioritize your resources across product development, marketing and sales.\nMake sure to [track the KPIs that matter for your business] to enable sustainable growth beyond your launch.",
                    "urls": ["https://www.crayon.co/blog/the-secret-to-product-launch-success-kpis"]
                }
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
            "bestPractice": {
                "description": "Converting talented people into dedicated employees, complementary businesses into value creating partnerships and high-quality investors into shareholders are key ingredients in the scale-up recipe.\nSuch access depends on developing and communicating a long-term strategy for value creation, which [has proven to deliver cumulative growth above average of 36% and 81% for revenue and economic profit], respectively.\nTurn this recipe into a tasteful soup by applying a [framework for measuring long-term value creation and engaging with your corporate stakeholders].",
                "urls": ["https://www.mckinsey.com/featured-insights/long-term-capitalism/where-companies-with-a-long-term-view-outperform-their-peers", "https://www.fcltglobal.org/wp-content/uploads/straight-talk_in-depth_vfo3363494db5326c50be1cff0000423a91.pdf"]
            }
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
            "bestPractice":
                {
                    "description": "The definition of a constraint is something that imposes a limit or restriction or that prevents something from occurring.\nTheory of Constraints is a methodology for identifying and managing the most important limiting factor. It was originally applied to industrial manufacturing in the 1980s and has since inspired leading software development methodologies and management systems, notably DevOps and Agile.\nLearn how to [use the Theory of Constraints framework to unlock your start-ups’ growth potential].",
                    "urls": ["https://www.leanproduction.com/theory-of-constraints.html"]
                },
        }
    ]
};


export  function populateDB() {
    let steps = {};
    let phases =  {};
    
    for (const key in p) {
        const phaseId = uuidv4()
        phases[phaseId] = {
            id: phaseId,
            name: key,
            type: key,
            motivation: '',
            steps: p[key].reduce((acc, step, stepIndex) => {
                
                const stepId = uuidv4()
                return {
                    ...acc,
                    [stepId]: {
                        id: stepId,
                        order: stepIndex,
                        ...step
                }
                }
            }, {})
        }
        

       

    }

    Promise.all(
        Object.values(phases).map(async (phase, phaseIndex) => {
            // @ts-ignore
            return firestore.collection('phases').doc(phase.id).set({...phase, order: phaseIndex})
        })
    )

    return phases

}

//Push steps and phases to firebase