import React, { Component } from 'react';
import { Button, Image, Text, View, StyleSheet, Dimensions } from 'react-native';

export default class MovieDetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.item.name,
    headerTitleStyle:{color:'#fff'},
    headerStyle: { backgroundColor: '#512DA8' },
  });

  render() {
    const { goBack } = this.props.navigation;
    let movieDetatil = this.props.navigation.state.params.item;
    let imgWidth = Dimensions.get('window').width - 20;
    let imgHeight = imgWidth * movieDetatil.imageOfMovieHeight / movieDetatil.imageOfMovieWidth;
    return (
      <View>
        <Text>{movieDetatil.summaryOfMovie}</Text>
        <Image source={{uri:movieDetatil.printscreen}} style={{width:imgWidth,height:imgHeight}}/>
        <Text>{movieDetatil.yunPassword}</Text>
      </View>
    );
  }
}
