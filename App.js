/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, Text,YellowBox} from 'react-native';
import LoginNav from './src/components/Navigation/LoginNav';
import {Provider} from 'react-redux';
import ConfigureStore from './src/components/redux/store/ConfigStore';

const store = ConfigureStore();
const App = () => {
  return (
    <Provider store={store}>
      <LoginNav />
    </Provider>
  );
};

export default App;
