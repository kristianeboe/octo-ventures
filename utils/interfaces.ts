interface Question {
    question: string,
    type: AnswerType,
    answerOptions?: string[],
    correctAnswer?: string
}

export type AnswerType = "BOOLEAN" | "TEXT";

interface ScoringFunction {
    companyValueIncrement: number,
    companySuccessRateIncrement: number
}

export interface Phase {
    type: 'Problem' | 'Team' | 'Solution' | 'Launch' | 'Scale',
    motivation: string,
    steps: PhaseStep[]
}

export interface PhaseStep {
    question: Question,
    scoringFunction: ScoringFunction,
    bestPractice?: string
}

export interface Company {
    name: string,
    successRate: number,
    evaluation: number
}

export interface CompanyMetricsContextProps {
    companyEvaluation: number,
    computeCompanyEvaluation: (number) => void,
    chanceOfSuccess: number,
    computeChanceOfSuccess: (number) => void
}