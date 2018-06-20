import {
    STORE_CREDENTIALS
} from './actions';

export function login_info(state = {login_info: {}}, action) {
    switch (action.type) {
        case STORE_CREDENTIALS:
            return {
                ...state,
                key: action.key
            };
        default:
            return state;
    }
}

export default login_info;