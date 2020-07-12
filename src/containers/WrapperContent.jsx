import React, { Component } from 'react';
import { SignOut, ConfirmSignIn, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact, withAuthenticator } from 'aws-amplify-react';
import awsConfig from '../config/spa/awsConfig';
import Amplify  from 'aws-amplify';

Amplify.configure(awsConfig);

class WrapperContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: ''
    };
  }

  componentDidMount() {
    
    this.setState(prevState => ({
      ...prevState,
      currentPage: this.props.currentPage,
    }))
  }

  render() {
    const { children } = this.props;
    const { currentPage } = this.state;

    return (
      <div id={currentPage}>
        {/*Wrapper*/}
        <div className="wrapper">
          {/*MAIN-CONTENT*/}
          <div className="main-content">
            {children}
          </div>
          {/* /MAIN-CONTENT*/}
        </div>
        {/*/Wrapper*/}
      </div>
    );
  }
}


 export default withAuthenticator(WrapperContent, true);
  