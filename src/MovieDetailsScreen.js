import React, { Component } from 'react';
import { Button, Image, Text, TouchableHighlight, ScrollView, View, StyleSheet, Dimensions, Platform, PixelRatio, Linking } from 'react-native';

export default class MovieDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.name,
    headerTitleStyle: { color: '#fff' },
    headerStyle: { backgroundColor: '#512DA8' },
    headerLeft:
    <TouchableHighlight style={{ width: 35, height: 35, marginLeft: 10, alignItems: 'center', justifyContent: 'center' }}
      activeOpacity={0.8}
      underlayColor='#512DA8'
      onPress={() => navigation.goBack(null)} >
      <Image source={require('./images/navigation_back_white.png')} style={{ width: 25, height: 25 }} />
    </TouchableHighlight>
    ,
  });

  render() {
    const { goBack } = this.props.navigation;
    let movieDetatil = this.props.navigation.state.params.item;
    let imgWidth = Dimensions.get('window').width - 20;
    let imgHeight = imgWidth * movieDetatil.imageOfMovieHeight / movieDetatil.imageOfMovieWidth;
    return (
      <View>
        <ScrollView >
          <Text style={styles.textStyle}>{movieDetatil.summaryOfMovie}</Text>
          <Image source={{ uri: movieDetatil.printscreen }} style={{
            width: imgWidth, height: imgHeight,
            marginLeft: 10, marginRight: 10,
          }} />
          <Text style={styles.textStyle}>{movieDetatil.yunPassword}</Text>

        </ScrollView >
        <TouchableHighlight style={[styles.imgButtonStyle, { position: 'absolute', bottom: 20, right: 20 }]} onPress={
          () => { Linking.openURL(movieDetatil.baiduyun).catch(err => console.error('An error occurred', err)); }
        }>
          <Image source={require('./images/link.png')} style={{ width: 30, height: 30 }} />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: '#212121',
    margin: 10
  },
  imgButtonStyle: {
    width: 50, height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#512DA8',
    borderColor: '#512DA8',
    borderRadius: 25,
    borderWidth: (Platform.OS === 'ios' ? 1.0 : 1.5) / PixelRatio.get(),
  }
});
