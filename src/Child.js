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
      <View style={styles.container}>
        <Text style={styles.title}>
          Capitalized text:
        </Text>
        <Text style={styles.text}>
          {this.getCapitalizedText()}
        </Text>
        <TouchableOpacity onPress={this.props.onClear}>
          <Text style={styles.button}>
            Clear text
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
    fontSize: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    padding: 20,
  },
  button: {
    marginTop: 30,
    fontSize: 30,
    color: '#007aff',
  },
});
