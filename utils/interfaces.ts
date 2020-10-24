export interface Phases {
    [key:string] : Phase
}

export interface Phase {
    type: 'Problem' | 'Team' | 'Research' | 'Develop' | 'Launch' | 'Scale',
    motivation: string,
    steps: PhaseStep[],
    id: string,
    name: string
}

export interface PhaseStep {
    id: string,
    question: string,
    scoringFunction: ScoringFunction,
    answerType: AnswerType,
    answers?: Answer[],
    bestPractice?: BestPractice,
    order?: number
}

interface BestPractice {
    urls: string[],
    description: string
}

export interface Answer {
    value: string,
    required?: boolean
}

export type AnswerType = "BOOLEAN" | "TEXT" | "MULTI";

interface ScoringFunction {
    companySuccessRateIncrement: number
}

export interface CompanyMetricsContextProps {
    chanceOfSuccess: number,
    computeChanceOfSuccess: (number) => void
    initializeChanceOfSuccess: (number) => void
}

export interface User {
    name: string;
    answers: UserAnswer[],
    id: string
    email: string;
    sessions: {
        [day: string]: number;
    };
}

interface UserAnswer {
    [key:string]: string | MultipleChoiceAnswer
}

interface MultipleChoiceAnswer {
    [key:string]: string[]
}