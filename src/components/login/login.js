import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../form/form';
import axios from "axios/index";
import { storeCredentials } from "./redux/actions";

/**
 * Login Component
 * @returns Login component that encapsulates the login form
 */
export class Login extends Component {

    constructor(props) {
        super(props);
        this.loginUser = this.loginUser.bind(this);
        this.formatAndStoreCredentials = this.formatAndStoreCredentials.bind(this);
    }

    /**
     * Using the email and password data from the form, make a post request to acquire the API key; store the API key
     * using this.formatAndStoreCredentials()
     */
    loginUser() {
        const API_URL = 'http://react-app.adwerx.com:3000/';
        const email = this.props.formValues['loginUsername'];
        const password = this.props.formValues['loginPassword'];
        const data = 'email=' + email + '&password=' + password;
        axios({
            method: 'post',
            url: API_URL + 'auth/',
            data: data,
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            }
        })
            .then(response => this.formatAndStoreCredentials(response.data))
            .catch(error => { alert('There was a problem logging in! Did you enter your user/password correctly?') });
    }

    /**
     * Format the credentials by placing a ':' between the id and secret and save it to the store using
     * this.props.credentials()
     * @param credentials: object that must contain id and secret
     */
    formatAndStoreCredentials(credentials) {
        const { id, secret } = credentials;
        const key = id + ':' + secret;
        this.props.storeCredentials(key);
    }

    render() {
        const fields = [
            {
                'name':'loginUsername',
                'label':'Username',
                'isPassword':false
            },
            {
                'name':'loginPassword',
                'label':'Password',
                'isPassword':true
            }
        ];
        return (
            <div className='col-md-3 col-sm-6 col-xs-12 align-self-end'>
                <Form fields={fields} submitFunction={this.loginUser} formName='login' />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        formValues: state['forms']['login'] || {}
    }
};

const mapDispatchToProps = dispatch => {
    return {
        storeCredentials: (key) => {
            dispatch(storeCredentials(key))
        },

    }
};

const ConnectedLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default ConnectedLogin;