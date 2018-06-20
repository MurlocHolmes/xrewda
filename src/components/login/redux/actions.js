/*
 * action types
 */

export const STORE_CREDENTIALS = 'STORE_CREDENTIALS';

/*
 * action creators
 */

export function storeCredentials(key) {
    return { type: STORE_CREDENTIALS,
             key: key }
}
