import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/store';

const MainApp = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

AppRegistry.registerComponent(appName, () => MainApp);
