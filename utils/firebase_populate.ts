import {v4 as uuidv4} from 'uuid';
import {firestore} from '../config/firebase';
import {scalePhase} from "../data/scalePhase";
import {problemPhase} from "../data/problemPhase";
import {teamPhase} from "../data/teamPhase";
import {researchPhase} from "../data/researchPhase";
import {developPhase} from "../data/developPhase";
import {launchPhase} from "../data/launchPhase";

const p = [
    problemPhase,
    teamPhase,
    researchPhase,
    developPhase,
    launchPhase,
    scalePhase
];

// const phases = [scalePhase];

export function migrateDB() {
    p.forEach(async phase => {
        await firestore.collection("phases").doc(phase.id).set({...phase});
    });

}

export function countTotalPoints() {
    let count = 0;
    p.forEach(phase => {
        phase.steps.forEach(step => {
            count += step.scoringFunction.companySuccessRateIncrement;
        })
    })
    console.log(count);
}

export  function populateDB() {
    let steps = {};
    let phases =  {};
    
    for (const key in p) {
        const phaseId = uuidv4()
        phases[phaseId] = {
            id: phaseId,
            name: key,
            type: key,
            motivation: '',
            steps: p[key].reduce((acc, step, stepIndex) => {
                
                const stepId = uuidv4()
                return {
                    ...acc,
                    [stepId]: {
                        id: stepId,
                        order: stepIndex,
                        ...step
                }
                }
            }, {})
        }
        

       

    }

    Promise.all(
        Object.values(phases).map(async (phase, phaseIndex) => {
            // @ts-ignore
            return firestore.collection('phases').doc(phase.id).set({...phase, order: phaseIndex})
        })
    )

    return phases

}

//Push steps and phases to firebase