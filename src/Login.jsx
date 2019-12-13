import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';


const ErrorDiv = props => (
  <div style={{ color: 'red' }}>
    {props.value
      ? props.value.length > 8
        ? ''
        : 'Text should Be minimum 8 charecters'
      : props.children}
  </div>
);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allFocus: false,
      values: { email: '', password: '' },
      touched: { email: false, password: false },
      errors: { email: '', password: '' }
    };
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ values: { ...this.state.values, [name]: value } });
  };

  handleBlur = event => {
    const { name } = event.target;
    this.setState({ touched: { ...this.state.touched, [name]: true } });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      allFocus: true
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.values.email}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        {(this.state.allFocus || this.state.touched.email) && (
          <ErrorDiv value={this.state.values.email}>Email Is Required</ErrorDiv>
        )}
        <br />
        <TextField
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.values.password}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        {(this.state.allFocus || this.state.touched.password) && (
          <ErrorDiv value={this.state.values.password}>
            Password Is Required
          </ErrorDiv>
        )}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Login;
