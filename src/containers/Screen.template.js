import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import LoadingIndicator from 'src/components/LoadingIndicator';
import { getUserInfo } from 'src/state/actions/auth';
import styles from './styles/ScreenStyles.template';


class Screen extends Component {  
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (this.props.user === null) return <LoadingIndicator />;

    return (
      <View style={styles.container}>
        <Text>
          Screen
        </Text>
      </View>
    );
  }
}

Screen.propTypes = {
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

export default connect(mapStateToProps, { getUserInfo })(Screen);
