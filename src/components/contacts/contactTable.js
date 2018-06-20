import React from 'react';
import ContactRow from './contactRow';

/**
 * ContactTable Component
 * @param props: must contain contacts {Object[]}
 * @returns HTML Table containing all contact rows and table header
 */
export const ContactTable = (props) => {
    const contactRows = props.contacts.map((contact, index) => (
        <ContactRow contact={contact} key={'contact_' + index} />
    ));
    return (
        <div className={'col-sm-10 col-md-8'}>
            <table className={'table'}>
                <tbody>
                <tr>
                    <th>Image</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Title</th>
                    <th>E-mail</th>
                </tr>
                {contactRows}
                </tbody>
            </table>
        </div>

    );
};

export default ContactTable;