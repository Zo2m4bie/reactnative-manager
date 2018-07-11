import firbase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
}

export const passwordChaged = (password) => {
    return {
        type: PASSWORD_CHANGED,
        payload: password
    }
}

export const loginUser = ({email, password}) => {
    return (dispantch) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(user=>console.log());
    };
}