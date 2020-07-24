import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import {Button} from 'reactstrap';
import instance from './secret';
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await instance
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/adminpanel");
      } catch (error) {
        alert("Неправильный логин или пароль");
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/adminpanel" />;
  }

  return (
    <div>
      <div className="row justify-content-center">
        <h1 className="title">Войти</h1>
      </div>
      
      <form onSubmit={handleLogin}>
        <div className="row justify-content-center">
          <div className="col-6">
            <input name="email" type="email" placeholder="username" className="form-control"/>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-6">
            <input name="password" type="password" placeholder="password" className="form-control"/>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-6">
            <Button type="submit" className="btn-block">Войти</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);