/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import codePush from "react-native-code-push";

import App from './src/App';

export default class yunziyuanESR_RN extends Component {
  
  render() {
    return (
      <App />
    );
  }
}

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

yunziyuanESR_RN = codePush(codePushOptions)(yunziyuanESR_RN);

AppRegistry.registerComponent('yunziyuanESR_RN', () => yunziyuanESR_RN);
