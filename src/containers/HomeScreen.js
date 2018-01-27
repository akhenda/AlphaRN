import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, Text, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

import Child from 'src/components/Child';
import LoadingIndicator from 'src/components/LoadingIndicator';
import { getUserInfo } from 'src/state/actions/auth';
import styles from './styles/HomeScreenStyles';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends Component {  
  constructor(props) {
    super(props);

    this.state = { text: '' };
  }
  
  setText(text) {
    this.setState({ text });
  }
  
  handleTextChange(text) {
    this.setText(text);
  }

  clearText() {
    this.setText('');
  }

  render() {
    const { user } = this.props;
    const { text } = this.state;

    if (user === null) return <LoadingIndicator />;

    return (
      <View testID='Welcome' style={styles.container}>
        <Text testID='WelcomeTitle' style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text testID='WelcomeInstruction' style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text testID='Instructions' style={styles.instructions}>
          {instructions}
        </Text>
        <TextInput
          value={text}
          testID='TextInput'
          style={styles.input}
          placeholder={'Write something...'}
          onChangeText={txt => this.handleTextChange(txt)}
        />
        <Child text={text} onClear={() => this.clearText()} />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  user: PropTypes.object,
  token: PropTypes.string,
  getUserInfo: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, { getUserInfo })(HomeScreen);
