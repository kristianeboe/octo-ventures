import {createContext, useEffect, useState} from "react";
import {firestore} from '../config/firebase';

export const PhaseContext = createContext<{ phases: any }>({phases: {}});

export const PhaseProvider = ({children}) => {

    const [phases, setPhases] = useState({});
    useEffect(() => {
        firestore.collection('phases').get().then(snapshot => {
            console.log('loading phases');
            const p = {};
            snapshot.forEach(doc => {
                const data = doc.data();
                p[data.id] = data;
            });
            setPhases(p);
        })
    }, []);

    return (<PhaseContext.Provider
        value={{phases}}>
        {children}
    </PhaseContext.Provider>)
};

