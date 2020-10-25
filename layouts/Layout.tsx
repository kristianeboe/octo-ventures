import React, {useContext, useEffect} from "react";
import {useCompanyMetrics} from "../utils/useCompanyMetrics";
import {CompanyMetricsContextProps} from "../utils/interfaces";
import {UserContext} from '../utils/UserProvider';
import {PerigeeLogo} from "./PerigeeLogo";
import {hotjar} from "react-hotjar";
import {signOut} from "../utils/auth";

export const CompanyMetricContext = React.createContext<CompanyMetricsContextProps>({
    chanceOfSuccess: 10,
    computeChanceOfSuccess: () => {
    },
    initializeChanceOfSuccess: () =>{}
});

export const Layout: React.FC = ({children}) => {
    let companyName = "Perigee by Octo Ventures";

    useEffect(() => {
        if (process.env.NODE_ENV === "production") {
            hotjar.initialize(2011654, 6);
        }
    }, []);

    const {user} = useContext(UserContext);
    const {
        chanceOfSuccess,
        computeChanceOfSuccess,
        initializeChanceOfSuccess
    } = useCompanyMetrics();

    let onLogOut = async () => {
        initializeChanceOfSuccess(10);
        await signOut();
    };

    return (
        <CompanyMetricContext.Provider
            value={{chanceOfSuccess, computeChanceOfSuccess, initializeChanceOfSuccess}}>
            <div className={"header"}>
                <div className={"logo"}>
                    <PerigeeLogo/>
                </div>
                {user && <div className={"userMenu"}>
                    <p>Welcome back {user.name}!</p>
                    <a onClick={onLogOut}>Log out</a>
                </div>}
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