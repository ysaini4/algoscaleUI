import React, { Component } from "react";

import { login } from "../services/apis";
class Login extends Component {
  state = { email: "", password: "" };
  emailChange = ({ currentTarget }) => {
    this.setState({ email: currentTarget.value });
  };
  passwordChange = ({ currentTarget }) => {
    this.setState({ password: currentTarget.value });
  };
  handleLogin = async () => {
    try {
      const { email, password } = this.state;
      let data = {
        email,
        password
      };
      let res = await login(data);
      if (res.status) {
        this.props.history.push("/tweets");
      }
    } catch (e) {}
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="form_bg">
            <form>
              <h2 className="text-center">Login</h2>
              <br />
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="userid"
                  value={this.state.email}
                  placeholder="User id"
                  onChange={this.emailChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.passwordChange}
                />
              </div>
              <br />
              <div className="align-center">
                <button
                  type="submit"
                  className="btn btn-default"
                  id="login"
                  onClick={this.handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
