import {
    STORE_CONTACTS,
    INITIALIZE_CONTACTS
} from './actions';

export function contact_info(state = {}, action) {
    switch (action.type) {
        case STORE_CONTACTS:
            return {
                ...state,
                contacts: action.contacts
            };
        case INITIALIZE_CONTACTS:
            let contacts;
            if(!action.initialized) {
                contacts = [];
            } else {
                contacts = state['contacts'];
            }
            return {
                ...state,
                contacts_initialized: action.initialized,
                contacts: contacts
            };
        default:
            return state;
    }
}

export default contact_info;