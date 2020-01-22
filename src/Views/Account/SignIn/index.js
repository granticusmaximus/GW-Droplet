import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SIgnUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../../../components/Firebase';
import { Form, Input, Button } from 'reactstrap';
import * as ROUTES from '../../../constants/routes';

const SignInPage = () => (
  <div className="container">
    <div className="pageHeader">Please sign in</div>
    <SignInForm />

  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.ADMIN);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div className="container-body">
        <center>
          <div className="loginBox">
            <Form onSubmit={this.onSubmit}>
              <Input
                name="email"
                value={email}
                onChange={this.onChange}
                type="text"
                placeholder="Email Address"
              />
              <br />
              <Input
                name="password"
                value={password}
                onChange={this.onChange}
                type="password"
                placeholder="Password"
              />
              <br />
              <Button color="primary" size="sm" disabled={isInvalid} type="submit">
                Sign In
              </Button>

              {error && <p>{error.message}</p>}
            </Form>
          </div>
        </center>
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignInPage;

export { SignInForm };