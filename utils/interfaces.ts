export type Phase = 'Problem' | 'Team' | 'Solution' | 'Launch' | 'Scale';

interface Question {
    question: string,
    type: 'BOOLEAN' | 'FREETEXT',
    answer: string
}

interface ScoringFunction {
    companyValueIncrement: number,
    companySuccessRateIncrement: number
}

export interface PhaseStep {
    description: string,
    question: Question,
    scoringFunction: ScoringFunction
}

export interface Company {
    name: string,
    successRate: number,
    evaluation: number
}