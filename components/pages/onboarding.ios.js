import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// Import 3rd party components
import Swiper from 'react-native-swiper';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

// Import stylesheet
import onboardingStyles from '../../public/styles/onboardingStyles.js';

class OnBoarding extends Component {  
  
  // Handle button press to go to next page.
  _handleNextPress() {
    this.props.navigator.immediatelyResetRouteStack([{
      id: 'Authenticate'
    }])
  }
  
  // Render onboarding process
  render() {
    return (
      <View style={{flex: 1}}>
        <Swiper 
          showsButtons={false}
          loop={false}
          activeDot={<View style={{backgroundColor: '#333', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
        >
          <View style={onboardingStyles.slide1}>
            <Text style={onboardingStyles.text}>meet new people through your interests</Text>
          </View>
          <View style={onboardingStyles.slide2}>
            <Text style={onboardingStyles.text}>or create a new surge</Text>
          </View>
          <View style={onboardingStyles.slide3}>
            <Text style={onboardingStyles.text}>get started today.</Text>
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