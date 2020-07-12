import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import PropTypes from 'prop-types';
import {CognitoState} from 'react-cognito';
import { Auth } from 'aws-amplify';

async function SignIn() {
  try {
      const user = await Auth.signIn(this.state.username, this.state.password);
  } catch (error) {
      console.log('error signing in', error);
  }
  } 

class LoginForm extends Component  {

  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      username: props.username,
      password: '',
    };
  }

 
  

      render() {
          return (
            <>
                <section className="login">
                  <section className="login__container">
                    <h2>Inicia sesión</h2>
                     <form className="login__container--form" onSubmit={this.SignIn}> 
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
                      <button className="button" type="submit">Iniciar sesión</button>
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


LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  clearCache: PropTypes.func,
  username: PropTypes.string,
  error: PropTypes.string,
  email: PropTypes.string,
};



export default LoginForm;



