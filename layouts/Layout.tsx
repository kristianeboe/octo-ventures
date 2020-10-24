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
                <div className={"userMenu"} onClick={signOut}>
                    <h3>Welcome back{user && `, ${user.name}`}!</h3>
                </div>
            </div>
            <div className={"container"}>
                {/*<div className={"headerMenu"}>*/}
                {/*    <div className={"companyName"}><h1>{companyName}</h1></div>*/}
                {/*    {user && <div className={"companyName"}><h2>Welcome back, {user.name}</h2></div>}*/}
                {/*    <div className={"companyMetrics"}>*/}
                {/*        <div className={"companyEvaluation"}>Company valuation: {companyEvaluation} NOK</div>*/}
                {/*        <div className={"companySuccessRate"}>Your chance of success: {chanceOfSuccess} %</div>*/}
                {/*    </div>*/}
                {/*    <br/>*/}
                {/*    <div className={"phases"}>*/}
                {/*        <Link href={"/phase/problem"}>*/}
                {/*            <div className={"phase"}>PROBLEM</div>*/}
                {/*        </Link>*/}
                {/*        <Link href={"/phase/team"}>*/}
                {/*            <div className={"phase"}>TEAM</div>*/}
                {/*        </Link>*/}
                {/*        <Link href={"/phase/research"}>*/}
                {/*            <div className={"phase"}>RESEARCH</div>*/}
                {/*        </Link>*/}
                {/*        <Link href={"/phase/develop"}>*/}
                {/*            <div className={"phase"}>DEVELOP</div>*/}
                {/*        </Link>*/}
                {/*        <Link href={"/phase/launch"}>*/}
                {/*            <div className={"phase"}>LAUNCH</div>*/}
                {/*        </Link>*/}
                {/*        <Link href={"/phase/scale"}>*/}
                {/*            <div className={"phase"}>SCALE</div>*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <br/>
                {
                    children
                }
            </div>
        </CompanyMetricContext.Provider>

    );
};