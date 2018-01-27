import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import LoginScreen from 'src/containers/LoginScreen';
import SignUpScreen from 'src/containers/SignUpScreen';
import HomeScreen from 'src/containers/HomeScreen';

import LoadingIndicator from 'src/components/LoadingIndicator';
import { isUserSignedIn } from 'src/state/actions/auth';

import { colors } from 'src/theme';
import styles from './styles/RootContainerStyles';


class RootContainer extends Component {
  componentWillMount() {
    this.props.isUserSignedIn(this.props.token);
  }

  render() {
    const { user, authenticated } = this.props;
    if (user && !authenticated) return <LoadingIndicator />;

    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor={colors.statusBarTranslucent} />
        <Router>
          <Scene key="root" navigationBarStyle={styles.header} >
            <Scene
              key="auth"
              hideNavBar
              initial={!authenticated}
              transitionConfig={
                () => ({ screenInterpolator: CardStackStyleInterpolator.forHorizontal })
              }
            >
              <Scene key="login" title="Log In" component={LoginScreen} />
              <Scene key="signup" title="Sign Up" component={SignUpScreen} />
            </Scene>
            <Scene key="main" hideNavBar initial={authenticated}>
              <Scene key="home" initial title="Home" component={HomeScreen} />
            </Scene>
          </Scene>
        </Router>
      </View>
    );
  }
}

RootContainer.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
  authenticated: PropTypes.bool,
  isUserSignedIn: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    token: state.auth.token,
    authenticated: state.auth.authenticated,
  };
};

export default connect(mapStateToProps, { isUserSignedIn })(RootContainer);
