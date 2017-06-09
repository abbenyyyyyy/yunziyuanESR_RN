import React, { PureComponent } from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, FlatList, Dimensions } from 'react-native';

export default class ChineseMoviesScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            listData: null
        }
    }

    componentDidMount() {
        fetch("http://abben-version.oss-cn-shenzhen.aliyuncs.com/ChineseMovies.json")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    listData: responseJson
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    _keyExtractor = (item, index) => item.name;

    _renderIten = ({ item }) => {
        return (
            <TouchableOpacity style={styles.viewStyle} activeOpacity={0.8} onPress={() => { this.props.navigation.navigate('MovieDetailsScreen', { item: item }) }}>
                <Image source={{ uri: item.imageOfMovie }} style={styles.imgStyle} />
                <Text style={styles.textStyle}>{item.name}</Text>
            </TouchableOpacity>
        )
    };

    render() {
        return (
            <FlatList
                data={this.state.listData}
                numColumns={2}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderIten}
            />
        );
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        borderColor: '#efefef',
        borderStyle: ('solid'),
        borderWidth: 1
    },
    imgStyle: {
        // 设置宽度
        width: Dimensions.get('window').width / 2 - 10,
        // 设置高度
        height: 280,
        marginLeft: 5,
        marginRight: 5,
        // 设置图片填充模式
        resizeMode: 'contain'
    },
    textStyle: {
        color: '#212121',
        textAlign: 'center'
    }
});