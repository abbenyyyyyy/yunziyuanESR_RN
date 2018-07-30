import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, Platform } from 'react-native';

import { StackNavigator, TabNavigator, TabBarTop } from 'react-navigation';

import appIcon from './images/app_icon.png';
import AllMoviesScreen from './AllMoviesScreen';
import EuramericanMoviesScreen from './EuramericanMoviesScreen';
import JanpanAndKoreaMoviesScreen from './JanpanAndKoreaMoviesScreen';
import ChineseMoviesScreen from './ChineseMoviesScreen';
import MovieDetailsScreen from './MovieDetailsScreen';
import AndroidAppVersionModule from './module/AndroidAppVersionModule';

export default class App extends Component {
    render() {
        return (
            <Navigator />
        );
    };
}

const Tab = TabNavigator(
    {
        Home: {
            screen: AllMoviesScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '所有电影'
            })
        },
        Nearby: {
            screen: EuramericanMoviesScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '欧美电影'
            })
        },
        Order: {
            screen: JanpanAndKoreaMoviesScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '日韩电影'
            })
        },
        Mine: {
            screen: ChineseMoviesScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '国产电影'
            })
        }
    },
    {
        tabBarComponent: TabBarTop,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#fff',
            inactiveTintColor: '#757575',
            scrollEnabled: false,
            indicatorStyle: { height: 0 },
            style: {
                backgroundColor: '#673AB7',
            }
        },
    }
);

async function showAppVersion() {
    try {
        var message;
        if (Platform.OS === 'ios') {
            message = '当前版本：未知。';
        } else {
            var {
                appVersion,
            } = await AndroidAppVersionModule.getAppVersion();
            message = '当前版本：' + appVersion;
        }

        Alert.alert('版本信息', message, [{ text: '确定', onPress: () => console.log('确定'), style: 'cancel' }],
            { cancelable: false });
    } catch (e) {
        console.error(e);
    }
}

const Navigator = StackNavigator(
    {
        MainHome: {
            screen: Tab,
            navigationOptions: {
                headerTitle: '云资源ESR热更新后',
                headerTitleStyle: { color: '#fff' },
                headerStyle: { backgroundColor: '#512DA8' },
                headerLeft: <Image source={appIcon} style={{ width: 35, height: 35, marginLeft: 10 }} />,
                headerRight: <TouchableOpacity onPress={() => showAppVersion()} >
                    <Image source={require('./images/about_icon.png')} style={{ width: 20, height: 20, marginRight: 10 }} />
                </TouchableOpacity>,
            }
        },
        MovieDetailsScreen: {
            screen: MovieDetailsScreen,
        }
    },
);
