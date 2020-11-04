import {useState} from "react";
import {CompanyMetricsContextProps} from "./interfaces";

interface CompanyMetrics {
    chanceOfSuccess: number,
    incrementChanceOfSuccess: (number) => void
}

export const useCompanyMetrics = (): CompanyMetricsContextProps => {
    let [chanceOfSuccess, setChanceOfSuccess] = useState(0);
    let [companyEvaluation, setCompanyEvaluation] = useState(0);

    const computeChanceOfSuccess = (delta: number) => {
        setChanceOfSuccess(Math.min(Math.max(chanceOfSuccess + delta, 0), 100));
    };

    const initializeChanceOfSuccess = (value: number) => {
        setChanceOfSuccess(value);
    };

    return {chanceOfSuccess, computeChanceOfSuccess, initializeChanceOfSuccess};
};