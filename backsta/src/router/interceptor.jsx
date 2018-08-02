import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
export const AuthorityCompoent = (Component) => {
  return class TM_FILENAME_BASE extends Component {
    render() {
      if (localStorage.getItem('user')) {
        return <Component />
      } else {
        return <Redirect to="/user/login/logins" />
      }
    }
  }
}
