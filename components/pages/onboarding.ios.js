import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// Import components
import Nav from '../layout/nav.ios.js';
import Swiper from 'react-native-swiper';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

class OnBoarding extends Component {
  
  _handleNextPress() {
    this.props.navigator.immediatelyResetRouteStack([{
      id: 'Authenticate'
    }])
  }
  
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
        >
          <View style={styles.slide1}>
            <Text style={styles.text}>meet new people through your interests</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>or create a new surge</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>get started today.</Text>
            <Button
              containerStyle={{marginTop: 15, padding:10, overflow:'hidden', borderRadius:4, backgroundColor: 'rgba(255, 255, 255, 0.2)'}}
              style={{color: 'white'}}
              onPress={() => this._handleNextPress()}
            >
              sign up.
            </Button>
          </View>
        </Swiper>
      </View>
    );
  }
}

module.exports = OnBoarding;


const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90A4AE',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#78909C',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#607D8B',
  },
  text: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    padding: 10
  }
});
