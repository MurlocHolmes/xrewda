/*
 * action types
 */

export const STORE_CONTACTS = 'STORE_CONTACTS';
export const INITIALIZE_CONTACTS = 'INITIALIZE_CONTACTS';

/*
 * action creators
 */

export function storeContacts(contacts) {
    return { type: STORE_CONTACTS,
        contacts: contacts }
}

export function initializeContacts(initialized) {
    return { type: INITIALIZE_CONTACTS,
            initialized: initialized }
}
