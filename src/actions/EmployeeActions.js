import firebase from 'firebase';
import { EMPLOYEE_UPDATE,
    EMLOYEE_CREATE, 
    EMPLOYEE_FETCH_SUCCESS,
    EMLOYEE_SAVE_SUCCESS
} from './types';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({prop, value}) => {
    console.log("prop " + prop + " value = " + value);
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    }
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => { firebase.database().ref(`/user/${currentUser.uid}/employees`)
        .push({ name, phone, shift }).then(()=>{
            dispatch({type: EMLOYEE_CREATE});
            Actions.pop()
        });
    };
}

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();
    console.log('employeesFetch ' + currentUser.uid);
    return (dispatch) => {
        firebase.database().ref(`user/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()})
        });
    };
}


export const employeeSave = ({name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`user/${currentUser.uid}/employees/${uid}`)
            .set({name, phone, shift})
            .then(()=> {
                dispatch({type: EMLOYEE_SAVE_SUCCESS});
                Actions.pop();
            });
    }
}