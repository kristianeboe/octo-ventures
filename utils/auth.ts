import {firestore, auth} from '../config/firebase';
import fire from '../config/firebase';
import Router from 'next/router';

const createUser = async (authUser: firebase.User) => {
    return firestore.collection('users').doc(authUser.uid).set({
        id: authUser.uid,
        email: authUser.email,
        name: authUser.displayName || '',
        answers: {}
    });
};

export const signInWithGoogle = async (redirectPath?: string) => {
    const provider = new fire.auth.GoogleAuthProvider();

    await auth.signInWithPopup(provider).then(async result => {
        if (result.additionalUserInfo.isNewUser) {
            await createUser(result.user);
        }
        if (redirectPath) {
            await Router.push(redirectPath);
        }
    });
};

export const signOut = async () => {
    await auth.signOut();
};