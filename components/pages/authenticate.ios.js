import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// Import components
import Nav from '../layout/nav.ios.js';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from '../subcomponents/login.ios.js'
import Register from '../subcomponents/register.ios.js'

class Authenticate extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1.2, backgroundColor: '#455A64'}}>
          <Nav />
        </View>
        <Swiper 
          showsButtons={false}
          loop={false}
          activeDot={<View style={{backgroundColor: '#333', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          index={1}
        >
          <View style={styles.slide1}>
            <Login />
          </View>
          <View style={styles.slide2}>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.text]}>register</Text>
              <Icon name="arrow-right" size={35} color="#fff" style={{marginTop: 25, marginLeft: 7}} />
            </View>

            <View style={{flexDirection: 'row'}}>
              <Icon name="arrow-left" size={35} color="#fff" style={{marginTop: 25, marginRight: 7}} />
              <Text style={[styles.text]}>login</Text>
            </View>
          </View>
          <View style={styles.slide3}>
            <Register />
          </View>
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#607D8B',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#37474F',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#607D8B',
  },
  text: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    padding: 10
  }
});

module.exports = Authenticate;