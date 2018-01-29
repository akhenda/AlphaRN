import 'src/config';
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import RequiresConnection from 'react-native-offline-mode';
import { PersistGate } from 'redux-persist/es/integration/react';

import { store, persistor } from 'src/state';
import { colors } from './theme';
import styles from './theme/styles';
import Offline from './components/Offline';
import RootContainer from './containers/RootContainer';
import LoadingIndicator from './components/LoadingIndicator';


class App extends Component {
  onBeforeLift = () => {
    // take some action before the gate lifts
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate 
          loading={<LoadingIndicator />}
          onBeforeLift={this.onBeforeLift}
          persistor={persistor}>
          <View style={styles.mainContainer}>
            <StatusBar translucent barStyle="light-content" backgroundColor={colors.statusBarTranslucent} />
            <RootContainer />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

export default RequiresConnection(App, Offline);
