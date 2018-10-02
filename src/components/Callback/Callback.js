import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from '../Auth/Auth';

// Callback runs after signing in and brings you to the desired page

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.history.replace('/admin');
  }

  render() {
    return (
      <p>Loading profile...</p>
    );
  }
}

export default withRouter(Callback);