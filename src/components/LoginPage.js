import React, {Component} from 'react';

import LoginForm from './LoginForm'

class LoginPage extends Component {

  render() {
    return (
      <div className="container" style={ContainerStyle}>
        <div className="row">
          <div className="col-sm-12 col-md-4 offset-4">
            <div className="card card-body">
              <h1 className="lead">Please Login</h1>
              <LoginForm/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const ContainerStyle = {
  'marginTop': '10%'
}

export default LoginPage
