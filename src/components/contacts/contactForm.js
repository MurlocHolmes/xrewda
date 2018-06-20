import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../form/form';
import axios from "axios/index";
import { initializeContacts } from "./redux/actions";

/**
 * ContactForm component
 * @returns HTML Contact form
 */
export class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.createContact = this.createContact.bind(this);
    }

    /**
     * Using the API key from the store and the contact info from the form, submit a post request to create a contact.
     * Set the contacts to uninitialized using initializeContacts() to force a re-render of the contact table.
     *
     */
    createContact() {
        const API_URL = 'http://react-app.adwerx.com:3000/';
        let data = '';
        const apiKey = this.props.apiKey;
        for(const key in this.props.formValues) {
            data = data + key + '=' + this.props.formValues[key] + '&';
        }
        axios({
            method: 'post',
            url: API_URL + 'api/contacts/',
            data: data,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(apiKey)
            }
        })
            .then(response => this.props.initializeContacts(false))
            .catch(error => { alert('Error creating contact, please try again later.') });
    }

    render() {
        const fields = [
            {
                'name':'email',
                'label':'E-mail',
                'isPassword':false
            },
            {
                'name':'first_name',
                'label':'First Name',
                'isPassword':false
            },
            {
                'name':'last_name',
                'label':'Last Name',
                'isPassword':false
            },
            {
                'name':'image',
                'label':'Profile Image',
                'isPassword':false
            },
            {
                'name':'title',
                'label':'Title',
                'isPassword':false
            }
        ];
        return (
            <div className={'col-sm-2 col-md-4'}>
                <Form fields={fields} submitFunction={this.createContact} formName='add_a_contact' />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        formValues: state['forms']['add_a_contact'] || {},
        apiKey: state['login_info']['key'] || ''
    }
};

const mapDispatchToProps = dispatch => {
    return {
        initializeContacts: (initialized) => {
            dispatch(initializeContacts(initialized))
        },

    }
};
const ConnectedContactForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactForm);

export default ConnectedContactForm;