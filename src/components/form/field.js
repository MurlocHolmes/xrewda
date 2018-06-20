import React from 'react';

/**
 * Field Component
 * @param props: must contain name {string}, label {string}, isPassword {bool} and updateValue {func}
 * @returns HTML field according to props
 */
export const Field = (props) => {
    const { name, label, isPassword, updateValue } = props;
    return (
        <div className="form-group">
            <label htmlFor={name} >{label}</label>
            <input type={isPassword ? 'password' : 'text'}
                   className='form-control'
                   id={name}
                   onChange={updateValue} />
        </div>
    );
};

export default Field;
