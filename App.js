/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';



export default class App extends Component {
  render() {
    const { backgroundStyle, linearGradient } = styles;
    return (
      <LinearGradient colors={['#78509b', '#3c284d']} style={linearGradient}>
        <View style={backgroundStyle}>
          <Header headerText={'BROWSE ANIME'} />
          <AlbumList/>
        </View>
      </LinearGradient>
    );
  }
}

const styles = {
  backgroundStyle: {
    width: '100%',
    height: '100%'
  },
  linearGradient: {
    flex: 1,
    borderRadius: 0
  }
}
