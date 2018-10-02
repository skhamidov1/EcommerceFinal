import React from 'react';
import {Route} from 'react-router-dom';
import auth0Client from '../Auth/Auth';

function SecuredRoute(props) {
  const {component: Component, path} = props;
  return (
    <Route path={path} render={() => {
        if (!auth0Client.isAuthenticated()) { // If not authenicated takes you to sign in 
          auth0Client.signIn();
          return <div></div>;
        }
        return <Component contactInfo = {props.contactInfo} cars={props.cars}/>
    }} />
  );
}

export default SecuredRoute;