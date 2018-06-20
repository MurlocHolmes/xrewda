import React from 'react';

/**
 * ContactRow Component
 * @param props: must contain first_name {string}, last_name {string}, title {string}, email {string} and image {string}
 * @returns HTML Contact row according to props
 */
export const ContactRow = (props) => {
    const { first_name, last_name, title, email, image } = props.contact;
    const style = {
        width: '75px',
        height: '75px'
    };
    return (
        <tr>
            <td className="col-2"><img src={image} alt={first_name + last_name} style={style} /></td>
            <td className="col-2">{first_name}</td>
            <td className="col-2">{last_name}</td>
            <td className="col-2">{title}</td>
            <td className="col-2">{email}</td>
        </tr>
    );
};

export default ContactRow;