import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

import { colors } from '../theme';
import styles from './styles/ActivitySpinnerStyles';


const ActivitySpinner = (props) => {
  const { size, color, style } = props;

  return (
    <ActivityIndicator
      animating
      size={size}
      color={color || colors.primary.main}
      style={[styles.activityIndicator, style]}
    />
  );
};

ActivitySpinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  style: ActivityIndicator.propTypes.style,
};

export default ActivitySpinner;
