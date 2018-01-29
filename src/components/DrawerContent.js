import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Content, Button, Text, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { images } from 'src/theme';
import styles from './styles/DrawerContentStyles';

class DrawerContent extends Component {
  renderMenuItem(icon, action, title, color, style) {
    return (
      <TouchableOpacity onPress={action} style={[styles.menuItem, style]}>
        <Icon name={icon} style={[styles.menuItemIcon, { color }]} />
        <Text style={styles.menuItemText}>{title}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { user } = this.props;
    
    // TODO: render the user details after we get the user object because
    // when the RootContainer loads at first the user object is null
    if (!user) return <View />;

    return (
      <Content
        bounces={false}
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.banner}>
          <Image source={images.banner} style={styles.bannerImage} />
          <View style={styles.bannerMask} />
          {user.first_name && user.last_name
            ? <Text style={[styles.name, styles.fullName]}>{user.first_name}{'\n'}{user.last_name}</Text>
            : <Text style={[styles.name, styles.singleName]}>{user.name || user.username}</Text>}
          <Button bordered light small style={styles.profileButton} onPress={Actions.profile}>
            <Text style={styles.profileButtonText}>Profile</Text>
          </Button>
        </View>
        <Image source={images.avatar} style={styles.avatar} />
        <View style={styles.menuItems}>
          {this.renderMenuItem('home', Actions.home, 'Home', 'blue')}
          {this.renderMenuItem('settings', Actions.home, 'Settings', 'black', styles.lastMenuItem)}
        </View>
        <TouchableOpacity style={styles.signOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </Content>
    );
  }
}

DrawerContent.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, null)(DrawerContent);
