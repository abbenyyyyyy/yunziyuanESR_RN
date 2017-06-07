import React, { Component } from 'react';
import { View, Button, Image } from 'react-native';
import { StackNavigator, TabNavigator, TabBarTop  } from 'react-navigation';

import appIcon from './images/app_icon.png';
import AllMoviesScreen from './AllMoviesScreen';
import EuramericanMoviesScreen from './EuramericanMoviesScreen';
import JanpanAndKoreaMoviesScreen from './JanpanAndKoreaMoviesScreen';
import ChineseMoviesScreen from './ChineseMoviesScreen';

export default class MainScreen extends Component {
    static navigationOptions = {
        headerTitle: '云资源ESR',
        headerTitleStyle:{color:'#fff'},
        headerStyle: { backgroundColor: '#512DA8' },
        headerLeft: <Image source={appIcon} style={{ width: 35, height: 35, marginLeft: 10 }} />,
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            // {/*<View>
            //     <Button
            //         title="Go to Jane's profile"
            //         onPress={() =>
            //             navigate('Profile', { name: 'Jane' })
            //         }
            //     />
            //     <Image source={appIcon} />
        // </View>*/}
            <Navigator/>
        );
    }
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
        Mine:{
            screen: ChineseMoviesScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '国产电影'
            })
        }
    },
    {
        tabBarComponent: TabBarTop ,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#fff',
            inactiveTintColor:'#757575',
            scrollEnabled :false,
            style: {
                backgroundColor: '#673AB7',
            }
        },
    }
);

const Navigator = StackNavigator(
    {
        Tab:{screen:Tab},
    },
    {
        navigationOptions: {
            header:null,
        }
    }
);