// Surge 2016.

import React, { Component } from 'react';
import { Navigator, Text, AppRegistry } from 'react-native';

// Import Routes
import OnBoarding from './components/pages/onboarding.ios.js'
import Authenticate from './components/pages/authenticate.ios.js'
import Profile from './components/pages/profile.ios.js'

// Setup Fireabse
import firebase from 'firebase';
// Current Project Config
const config = {
  apiKey: "AIzaSyAjGBhIYsmd1Jhz5WRAkpnMAVf9oST7bD8",
  authDomain: "surgetest-268d9.firebaseapp.com",
  databaseURL: "https://surgetest-268d9.firebaseio.com",
  storageBucket: "surgetest-268d9.appspot.com",
};
// Initialize
firebase.initializeApp(config);

class Surge extends Component {
  constructor() {
    super();
  }
  
  // Navigation Render
  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    // Routes
    switch(route.id) {
      case 'OnBoarding':
        return(<OnBoarding navigator={navigator} title="OnBoarding" />)
      case 'Authenticate':
        return(<Authenticate navigator={navigator} title='Authenticate' />)
      case 'Profile':
        return(<Profile navigator={navigator} title='Profile' />)
    }
  }
  
  render() {
    // render navigator.
    return (
      <Navigator
        initialRoute={{
          id: 'Authenticate'
        }}
        renderScene={
          this.navigatorRenderScene.bind(this)
        }
      />
    )
  }
}

AppRegistry.registerComponent('Project', () => Surge);
