/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import Child from './Child';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
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
    const { text } = this.state;

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    width: '80%',
    height: 60,
    padding: 10,
    marginTop: 30,
    alignSelf: 'center',
  },
});
