import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, StatusBar, BackHandler } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { images, colors } from 'src/theme';
import Form from 'src/components/Form';
import LogoWrapper from 'src/components/LogoWrapper';
import { authFieldChanged, loginUser } from 'src/state/actions/auth';

import styles from './styles/LoginScreenStyles';


class LoginScreen extends Component {  
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid());
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid());
  }

  onChangeEmail(value) {
    this.props.authFieldChanged({ prop: 'email', value });
  }

  onChangePassowrd(value) {
    this.props.authFieldChanged({ prop: 'password', value });
  }
  
  backAndroid() {
    BackHandler.exitApp();
    return false;
  }

  logIn() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  render() {
    const {
      email, password, loading, error, message,
    } = this.props;
    const hasError = Object.prototype.hasOwnProperty.call(error, 'message');
    const msg = hasError ? error.message : message;

    return (
      <Container style={styles.container}>
        <StatusBar translucent barStyle="light-content" backgroundColor={colors.statusBarTranslucent} />
        <ImageBackground source={images.background3} style={styles.backgroundImage}>
          <Content contentContainerStyle={styles.content}>
            <LogoWrapper pageTitle="Log In" error={msg} />
            <Form
              error={hasError}
              loading={loading}
              buttonText="Log In"
              emailValue={email}
              passwordValue={password}
              fields={['email', 'password']}
              altAction={() => Actions.signup()}
              onChangeEmail={text => this.onChangeEmail(text)}
              onChangePassword={text => this.onChangePassowrd(text)}
              onSubmitForm={() => this.logIn()}
              altText="Don&apos;t have an account? Sign up."
            />
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const {
    email, password, loading, error, authenticated, user, message,
  } = auth;

  return {
    email,
    password,
    loading,
    error,
    user,
    message,
    authenticated,
  };
};

LoginScreen.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  message: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.object,
  authFieldChanged: PropTypes.func,
  loginUser: PropTypes.func,
  authenticated: PropTypes.bool,
};

export default connect(mapStateToProps, { authFieldChanged, loginUser })(LoginScreen);
