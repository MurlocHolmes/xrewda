import React, { Component } from 'react';
import { connect } from 'react-redux';
import Registration from '../registration/registration';
import Login from '../login/login';

/**
 * RegisterOrLogin component that was created to encapsulate the Registration and Login components or display a success
 * message upon login.
 * @returns HTML component containing the Registration and Login components
 */
export class RegisterOrLogin extends Component {

    render() {
        if(this.props.apiKey === '') {
            return (
                <div className='row'>
                    <Registration/>
                    <Login/>
                </div>
            );
        } else {
            return (
                <div className='row'>
                    <h1>Welcome to the show!</h1>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        apiKey: state['login_info']['key'] || ''
    }
};

const ConnectedRegisterOrLogin = connect(
    mapStateToProps,
    null
)(RegisterOrLogin);

export default ConnectedRegisterOrLogin;