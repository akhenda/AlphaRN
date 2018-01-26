import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, Keyboard } from 'react-native';
import { View, Text, Item, Input, Icon, Button } from 'native-base';

import { colors } from 'src/theme';
import styles from './styles/FormStyles';


class Form extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showFooter: true,
    };
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => this.keyboardDidShow());
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => this.keyboardDidHide());
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  keyboardDidShow() {
    this.setState({ showFooter: false });
  }

  keyboardDidHide() {
    this.setState({ showFooter: true });
  }

  renderInput(value, placeholder, onChange, icon, keyboard = 'default') {
    const { error } = this.props;

    return (
      <Item rounded style={styles.textInput} error={error}>
        <Icon active name={icon ||'ios-contact'} style={styles.textInputIcon} />
        <Input
          value={value}
          autoCorrect={false}
          onChangeText={onChange}
          keyboardType={keyboard}
          placeholder={placeholder}
          style={styles.textInputField}
          placeholderTextColor={colors.secondary.main}
          secureTextEntry={placeholder === 'Password'}
          autoCapitalize={placeholder === 'Full Name' ? 'words' : 'none'}
        />
      </Item>
    );
  }
  
  renderFooter() {
    const { fields } = this.props;

    if (!fields.includes('fullName') && this.state.showFooter) {
      return (
        <View style={styles.footer}>
          <Button transparent light style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.footerText}>Forgot Password?</Text>
          </Button>
          <Button transparent block light onPress={() => {}}>
            <Text style={styles.footerText}>Skip</Text>
          </Button>
        </View>
      );
    }
  }

  render() {
    const {
      fields,
      altText,
      loading,
      altAction,
      buttonText,
      emailValue,
      passwordValue,
      usernameValue,
      fullNameValue,
      onChangeEmail,
      onChangePassword,
      onChangeFullName,
      onChangeUsername,
      onSubmitForm,
    } = this.props;

    return (
      <View style={styles.form}>
        {fields.includes('fullName')
          ? this.renderInput(fullNameValue, 'Full Name', onChangeFullName)
          : null}

        {fields.includes('username')
          ? this.renderInput(usernameValue, 'Username', onChangeUsername, 'ios-person-outline')
          : null}
      
        {fields.includes('email')
          ? this.renderInput(emailValue, 'Email Address', onChangeEmail, 'ios-mail', 'email-address')
          : null}
        
        {fields.includes('password')
          ? this.renderInput(passwordValue, 'Password', onChangePassword, 'ios-lock')
          : null}
        
        <Button rounded block light style={styles.button} onPress={onSubmitForm}>
          {loading
            ? <ActivityIndicator animating size="large" />
            : <Text>{buttonText}</Text>
          }
        </Button>
        <Button transparent block light style={styles.button} onPress={altAction}>
          <Text>{altText}</Text>
        </Button>
        {this.renderFooter()}
      </View>
    );
  }
}

Form.propTypes = {
  emailValue: PropTypes.string,
  passwordValue: PropTypes.string,
  error: PropTypes.bool.isRequired,
  fields: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  altText: PropTypes.string.isRequired,
  altAction: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  lastNameValue: PropTypes.string,
  usernameValue: PropTypes.string,
  fullNameValue: PropTypes.string,
  onSubmitForm: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func,
  onChangeUsername: PropTypes.func,
  onChangeFullName: PropTypes.func,
  onChangePassword: PropTypes.func,
};

export default Form;
