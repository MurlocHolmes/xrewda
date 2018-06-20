import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../form/form';
import axios from 'axios';

/**
 * RegistrationComponent that is used to create a new user
 * @returns HTML component containing the registration form
 */
export class Registration extends Component {

    constructor(props) {
        super(props);
        this.createUser = this.createUser.bind(this);
    }

    /**
     * Using the form data, creates a user by sending a POST request to the API. Shows success or failure message
     */
    createUser() {
        const API_URL = 'http://react-app.adwerx.com:3000/';
        const email = this.props.formValues['registerUsername'];
        const password = this.props.formValues['registerPassword'];
        const data = 'email=' + email + '&password=' + password;
        axios({
            method: 'post',
            url: API_URL + 'register/',
            data: data,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => {alert('You\'ve been registered! Now login, please')})
            .catch(error => {alert('There was an error processing your registration; please try again')});
    }

    render() {
        const fields = [
            {
                'name':'registerUsername',
                'label':'Username',
                'isPassword':false
            },
            {
                'name':'registerPassword',
                'label':'Password',
                'isPassword':true
            }
        ];
        return (
            <div className='col-md-3 col-sm-6 col-xs-12'>
                <Form fields={fields} submitFunction={this.createUser} formName='registration' />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        formValues: state['forms']['registration'] || {}
    }
};


const ConnectedRegistration = connect(
    mapStateToProps,
    null
)(Registration);

export default ConnectedRegistration;