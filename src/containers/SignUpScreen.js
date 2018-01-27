import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, StatusBar, BackHandler } from 'react-native';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import Form from 'src/components/Form';
import LogoWrapper from 'src/components/LogoWrapper';
import { authFieldChanged, registerUser, clearInputData } from 'src/state/actions/auth';

import { images, colors } from 'src/theme';
import styles from './styles/LoginScreenStyles';


class SignUpScreen extends Component {
  componentWillMount() {
    this.props.clearInputData();

    BackHandler.addEventListener('hardwareBackPress', () => this.backAndroid());
  }
  
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', () => this.backAndroid());
  }

  onChangeFullName(value) {
    this.props.authFieldChanged({ prop: 'fullName', value });
  }

  onChangeUsername(value) {
    this.props.authFieldChanged({ prop: 'username', value });
  }

  onChangeEmail(value) {
    this.props.authFieldChanged({ prop: 'email', value });
  }

  onChangePassowrd(value) {
    this.props.authFieldChanged({ prop: 'password', value });
  }

  signUpUser() {
    let firstName = '';
    let lastName = '';
    const {
      email, password, fullName, username,
    } = this.props;
    const nameArray = fullName.split(' ');

    if (nameArray.length === 2) {
      [firstName, lastName] = nameArray;
    } else if (nameArray.length > 2) {
      [firstName, ...lastName] = nameArray;
      lastName = lastName.join(' ');
    } else if (fullName) {
      firstName = fullName;
    }
    
    const data = {
      firstName, lastName, username, email, password,
    };

    // console.tron.display({
    //   name: '🔥 AlphaRN 🔥',
    //   preview: 'You should totally expand this',
    //   value: {
    //     '💃': 'Welcome to the future!',
    //     data,
    //   },
    // });

    this.props.registerUser(data);
  }
  
  backAndroid() {
    Actions.pop();
    return false;
  }

  render() {
    const {
      fullName, username, email, password, loading, error,
    } = this.props;
    const hasError = Object.prototype.hasOwnProperty.call(error, 'message');

    return (
      <Container style={styles.container}>
        <StatusBar translucent barStyle="light-content" backgroundColor={colors.statusBarTranslucent} />
        <ImageBackground source={images.background85} style={styles.backgroundImage}>
          <Content contentContainerStyle={styles.content}>
            <LogoWrapper pageTitle="Create an Account" error={hasError ? error.message : ''} />
            <Form
              error={hasError}
              loading={loading}
              emailValue={email}
              buttonText="Sign Up"
              fullNameValue={fullName}
              usernameValue={username}
              passwordValue={password}
              altAction={() => Actions.pop()}
              altText="Have an account? Log In."
              onSubmitForm={() => this.signUpUser()}
              onChangeEmail={text => this.onChangeEmail(text)}
              onChangePassword={text => this.onChangePassowrd(text)}
              onChangeFullName={text => this.onChangeFullName(text)}
              onChangeUsername={text => this.onChangeUsername(text)}
              fields={['fullName', 'username', 'email', 'password']}
            />
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

SignUpScreen.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  fullName: PropTypes.string,
  username: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.object,
  authFieldChanged: PropTypes.func,
  registerUser: PropTypes.func,
  clearInputData: PropTypes.func,
};

const mapStateToProps = ({ auth }) => {
  const {
    email, password, loading, error, fullName, username,
  } = auth;

  return {
    email,
    password,
    fullName,
    username,
    loading,
    error,
  };
};

export default connect(mapStateToProps, {
  authFieldChanged, registerUser, clearInputData,
})(SignUpScreen);
