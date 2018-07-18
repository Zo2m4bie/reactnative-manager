import { EMPLOYEE_UPDATE, EMLOYEE_CREATE, EMLOYEE_SAVE_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value }
        case EMLOYEE_SAVE_SUCCESS: 
            return INITIAL_STATE;
        default:
            return state;
    }
};