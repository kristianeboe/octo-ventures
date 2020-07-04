import {useState} from "react";
import {CompanyMetricsContextProps} from "./interfaces";

interface CompanyMetrics {
    chanceOfSuccess: number,
    incrementChanceOfSuccess: (number) => void,
    companyEvaluation: number,
    incrementCompanyEvaluation: (number) => void
}

export const useCompanyMetrics= (): CompanyMetricsContextProps => {
    let [chanceOfSuccess, setChanceOfSuccess] = useState(10);
    let [companyEvaluation, setCompanyEvaluation] = useState(0);

    const computeChanceOfSuccess = (delta: number) => {
        setChanceOfSuccess(Math.min(Math.max(chanceOfSuccess + delta, 0), 100));
    };

    const computeCompanyEvaluation = (delta: number) => {
        setCompanyEvaluation(Math.max(companyEvaluation + delta, 0));
    };

    return {chanceOfSuccess, computeChanceOfSuccess, companyEvaluation, computeCompanyEvaluation};
};