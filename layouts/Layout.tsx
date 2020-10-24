import React, {useContext} from "react";
import Link from "next/link"
import {useCompanyMetrics} from "../utils/useCompanyMetrics";
import {CompanyMetricsContextProps} from "../utils/interfaces";
import {UserContext} from '../utils/UserProvider';
import {PerigeeLogo} from "./PerigeeLogo";
import {useEffect} from "react";
import {hotjar} from "react-hotjar";
import { signOut } from '../utils/auth';

export const CompanyMetricContext = React.createContext<CompanyMetricsContextProps>({
    companyEvaluation: 0,
    computeCompanyEvaluation: () => {
    },
    chanceOfSuccess: 10,
    computeChanceOfSuccess: () => {
    },
});

export const Layout: React.FC = ({children}) => {
    let companyName = "Perigee by Octo Ventures";

    useEffect(() => {
        if (process.env.NODE_ENV === "production") {
            hotjar.initialize(2011654, 6);
        }
    }, []);

    const {user, firebaseUser} = useContext(UserContext);
    const {
        chanceOfSuccess,
        computeChanceOfSuccess,
        companyEvaluation,
        computeCompanyEvaluation,
    } = useCompanyMetrics();

    return (
        <CompanyMetricContext.Provider
            value={{chanceOfSuccess, computeChanceOfSuccess, companyEvaluation, computeCompanyEvaluation}}>
            <div className={"header"}>
                <div className={"logo"}>
                    <PerigeeLogo/>
                </div>
                <div className={"userMenu"} >
                    <h3>Welcome back{user && `, ${user.name}`}!</h3>
                </div>
            </div>
            <div className={"container"}>
                <br/>
                {
                    children
                }
            </div>
        </CompanyMetricContext.Provider>

    );
};