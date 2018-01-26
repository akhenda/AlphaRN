import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

import config from 'src/config/debug';

if (config.useReactotron) {
  // https://github.com/infinitered/reactotron for more options!
  Reactotron
    .configure({ name: 'AlphaRN' }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .connect(); // let's connect!

  // Let's clear Reactotron every time we load the app
  Reactotron.clear();

  // Totally hacky, but this allows us not to be importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron;
}
