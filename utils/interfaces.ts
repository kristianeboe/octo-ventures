export interface Phase {
    type: 'Problem' | 'Team' | 'Research' | 'Develop' | 'Launch' | 'Scale',
    motivation: string,
    steps: PhaseStep[]
}

export interface PhaseStep {
    id: string,
    question: string,
    scoringFunction: ScoringFunction,
    answerType: AnswerType,
    answers?: Answer[],
    bestPractice?: BestPractice[]
}

interface BestPractice {
    url: string,
    description: string
}

export interface Answer {
    value: string,
    required?: boolean
}

export type AnswerType = "BOOLEAN" | "TEXT" | "MULTI";

interface ScoringFunction {
    companyValueIncrement: number,
    companySuccessRateIncrement: number
}

export interface CompanyMetricsContextProps {
    companyEvaluation: number,
    computeCompanyEvaluation: (number) => void,
    chanceOfSuccess: number,
    computeChanceOfSuccess: (number) => void
}

export interface User {
    answers: UserAnswer,
    id: string
}

interface UserAnswer {
    [key:string]: string | MultipleChoiceAnswer
}

interface MultipleChoiceAnswer {
    [key:string]: boolean
}