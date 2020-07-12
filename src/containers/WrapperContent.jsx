import React, { Component } from 'react';
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsConfig from '../config/spa/awsConfig';
import Amplify  from 'aws-amplify';
//import { CognitoSignIn } from '@components/';

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
            <AmplifyAuthenticator usernameAlias="email">
              <div>
                My App
                <AmplifySignOut />
              </div>    
            </AmplifyAuthenticator>
          </div>
          {/* /MAIN-CONTENT*/}
        </div>
        {/*/Wrapper*/}
      </div>
    );
  }
}



 export default withAuthenticator(WrapperContent)
  