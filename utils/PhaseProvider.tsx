import {createContext, useContext, useEffect, useState} from "react";
import {firestore} from '../config/firebase';
import {UserContext} from "./UserProvider";
import {Phases} from "./interfaces";
import {CompanyMetricContext} from "../layouts/Layout";

export const PhaseContext = createContext<{ phases: any }>({phases: []});

export const PhaseProvider = ({children}) => {

    const [phases, setPhases] = useState<Phases>({});

    const {user} = useContext(UserContext);
    const {computeChanceOfSuccess} = useContext(CompanyMetricContext);

    useEffect(() => {
        firestore.collection('phases').get().then(snapshot => {
            const p = {};
            snapshot.forEach(doc => {
                const data = doc.data();
                p[data.id] = data;
            });
            setPhases(p);
        })
    }, []);

    useEffect(() => {
        if (phases) {
            let scoreDelta = 0;
            Object.values(phases).forEach(phase => {
                Object.values(phase.steps).forEach(step => {
                    let userAnswer = user.answers[step.id];
                    if (!userAnswer) return;
                    if (step.answerType=="MULTI" && JSON.stringify(userAnswer.sort()) == JSON.stringify(step.answers.filter(ans => ans.required).map(ans=>ans.value).sort())) {
                        scoreDelta += step.scoringFunction.companySuccessRateIncrement;
                    } else if (step.answerType=="BOOLEAN" && userAnswer === step.answers.filter(ans=>ans.required)[0].value) {
                        scoreDelta += step.scoringFunction.companySuccessRateIncrement;
                    } else if (step.answerType == "TEXT") {
                        if (userAnswer.length > 0) {
                            scoreDelta += step.scoringFunction.companySuccessRateIncrement;
                        }
                    }
                });
            });
            computeChanceOfSuccess(scoreDelta);
        }
    }, [phases]);

    return (<PhaseContext.Provider
        value={{phases}}>
        {children}
    </PhaseContext.Provider>)
};

