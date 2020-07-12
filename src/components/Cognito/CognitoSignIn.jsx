import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';
import { SignIn } from 'aws-amplify-react';
import {Link} from 'react-router-dom';
class CognitoSignIn extends SignIn  {

  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      username: props.username,
      password: '',
    };
  } 

  SignIn = async () => {
    try {
      const user = await Auth.signIn({
          username, // Required, the username
          password, // Optional, the password
          //validationData, // Optional, an arbitrary key-value pair map which can contain any key and will be passed to your PreAuthentication Lambda trigger as-is. It can be used to implement additional validations around authentication
      });
      console.log('user is signed in!', user);
    } catch (error) {
      console.log('error signing in:' , error);
    }
  }


      render() {
          return (
            <>
                
                <section className="login">
                  <section className="login__container">
                    <h2>Inicia sesión</h2>
                     <form className="login__container--form"> 
                      <input
                        name="email"
                        className="input"
                        type="text"
                        placeholder="Correo"
                        onChange={this.changeUsername}
                        required
                      />
                      <input
                        name="password"
                        className="input"
                        type="password"
                        placeholder="Contraseña"
                        onChange={this.changePassword}
                        required
                      />
                      <button className="button" type="submit" onSubmit={this.SignIn}>Iniciar sesión</button>
                      <div className="login__container--remember-me">
                        <label>
                          <input type="checkbox" id="cbox1" value="first_checkbox" />{" "}
                          Recuérdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                      </div>
                    </form>
                    <p className="login__container--register">
                      No tienes ninguna cuenta <Link to="/register">Regístrate</Link>
                    </p>
                  </section>
                </section> 
          </>
          )
        }
}


CognitoSignIn.propTypes = {
  onSubmit: PropTypes.func,
  clearCache: PropTypes.func,
  username: PropTypes.string,
  error: PropTypes.string,
  email: PropTypes.string,
};



export default CognitoSignIn;



