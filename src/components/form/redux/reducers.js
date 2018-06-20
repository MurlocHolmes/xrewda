import {
    UPDATE_FORM
} from './actions';

export function forms(state = {forms: {}}, action) {
    switch (action.type) {
        case UPDATE_FORM:
            const { formName, fieldName, fieldValue } = action;
            const forms = Object.assign({}, state);
            forms[formName] = state[formName] || {};
            forms[formName][fieldName] = fieldValue;
            return {
                ...state,
                ...forms
            };
        default:
            return state;
    }
}

export default forms;