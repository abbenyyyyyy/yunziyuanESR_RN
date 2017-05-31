import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';

export default class App extends Component {
    render() {
        return (
            <Navigator/>
        );
    }
}

const Navigator = StackNavigator({
  Main: {screen: MainScreen},
  Profile: {screen: ProfileScreen},
});
