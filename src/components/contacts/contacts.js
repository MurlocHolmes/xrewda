import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from "axios/index";
import { storeContacts, initializeContacts } from "./redux/actions";
import ContactForm from "./contactForm";
import ContactTable from './contactTable';


/**
 * Contacts Component that fetches contacts according to state
 * @returns HTML div encapsulating the contact table and form
 */
export class Contacts extends Component {

    /**
     * Using the API key from the store, get all contacts associated with a user. Store the result in the store
     * using this.props.storeContacts()
     *
     */
    fetchContacts() {
        const API_URL = 'http://react-app.adwerx.com:3000/';
        const apiKey = this.props.apiKey;
        axios({
            method: 'get',
            url: API_URL + 'api/contacts/',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(apiKey)
            }
        })
            .then(response => this.props.storeContacts(response.data))
            .catch(error => { alert('Error retrieving contacts, but we\'re going to keep trying.') });
    }

    render() {
        // If the API key is empty, the user hasn't logged in yet and this component should be blank
        if(this.props.apiKey !== '') {
            if (!this.props.contacts_initialized) {
                this.fetchContacts();
            }
            return (

                <div className='col-12'>
                    <ContactTable contacts={this.props.contacts} />
                    <ContactForm />
                </div>
            );
        } else {
            return (<div/>);
        }
    }
}

const mapStateToProps = state => {
    return {
        contacts: state['contact_info']['contacts'] || [],
        contacts_initialized: state['contact_info']['contacts_initialized'] || false,
        apiKey: state['login_info']['key'] || ''
    }
};


const mapDispatchToProps = dispatch => {
    return {
        storeContacts: (contacts) => {
            dispatch(storeContacts(contacts))
        },
        initializeContacts: (initialized) => {
            dispatch(initializeContacts(initialized))
        },

    }
};

const ConnectContacts = connect(
    mapStateToProps,
    mapDispatchToProps
)(Contacts);

export default ConnectContacts;