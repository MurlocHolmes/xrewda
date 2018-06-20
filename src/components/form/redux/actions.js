/*
 * action types
 */

export const UPDATE_FORM = 'UPDATE_FORM';

/*
 * action creators
 */

export function updateForm(form, fieldName, fieldValue) {
    return { type: UPDATE_FORM,
             formName: form,
             fieldName: fieldName,
             fieldValue: fieldValue }
}
