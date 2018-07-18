import { EMPLOYEE_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    console.log(action.type);
    switch (action.type) {
        case EMPLOYEE_FETCH_SUCCESS:{
            console.log("value");
            console.log(action.payload);
            return action.payload;
        }
        default:{
            console.log("default");
            return state;
        }
    }
};