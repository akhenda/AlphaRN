import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { capitalizeWords } from './utils/capitalize';

export default class Child extends Component {
  getCapitalizedText() {
    const { text } = this.props;
    if (text) return capitalizeWords(text);

    return 'You have not written anything!';
  }

  render() {
    return (
      <View testID='Child' style={styles.container}>
        <Text testID='ChildTitle' style={styles.title}>
          Capitalized Text:
        </Text>
        <Text testID='ChildOutput' style={styles.text}>
          {this.getCapitalizedText()}
        </Text>
        <TouchableOpacity testID='ClearText' onPress={this.props.onClear}>
          <Text style={styles.button}>
            CLEAR TEXT
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Child.propTypes = {
  text: PropTypes.string.isRequired,
  onClear: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    padding: 20,
  },
  button: {
    fontSize: 18,
    marginTop: 30,
    color: 'azure',
    borderRadius: 6,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'darkkhaki',
  },
});
