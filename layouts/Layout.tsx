import React, {useContext} from "react";
import Link from "next/link"
import {useCompanyMetrics} from "../utils/useCompanyMetrics";
import {CompanyMetricsContextProps} from "../utils/interfaces";
import {UserContext} from '../utils/UserProvider';
import {PerigeeLogo} from "./PerigeeLogo";
import {useEffect} from "react";
import {hotjar} from "react-hotjar";
<<<<<<< HEAD
=======
import {signOut} from "../utils/auth";
import Router from "next/router";
>>>>>>> fe6b1b91e5673593ce0cad64b61daed87973f161

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