import { Authenticator, SignIn, SignUp, ConfirmSignUp, Greetings } from 'aws-amplify-react';
import { Component } from 'react';


class AuthContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            authState: props.authState
        }
    }

    handleAuthStateChange(state) {
        if (this.state.authState === 'signedIn') {
            /* Do something when the user has signed-in */
        }
    }

    render() {
        return (
        <>    
            <div>
                <div>I am always here to show current auth state: {props.authState}</div>
                <button onClick={() => this.props.onStateChange('signUp')}>Show Sign Up</button>
            </div>
        
            <Authenticator hideDefault={true} onStateChange={this.handleAuthStateChange}>
                <SignIn/>
                <SignUp/>
                <ConfirmSignUp/>
                <Greetings/>
                <AlwaysOn/>
            </Authenticator>
        </>
        )
    }

}

export default AuthContainer;





