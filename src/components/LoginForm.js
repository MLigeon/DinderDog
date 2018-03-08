import React, {PureComponent} from 'react';

export default class LoginForm extends PureComponent {
  state = {};

  handleSubmit = e => {
    e.preventDefault ();
    this.props.onSubmit (this.state);
  };

  handleChange = event => {
    const {name, value} = event.target;

    this.setState ({
      [name]: value,
    });
  };

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="form-control"
              value={this.state.email || ''}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="form-control"
            value={this.state.password || ''}
            onChange={this.handleChange}
          />
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Login</button>
      </form>
    );
  }
}
