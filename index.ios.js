// Surge 2016.

import React, { Component } from 'react';
import { Navigator, Text, AppRegistry } from 'react-native';

// TODO
import OnBoarding from './components/pages/onboarding.ios.js'
import Authenticate from './components/pages/authenticate.ios.js'

class Surge extends Component {
  constructor() {
    super();
    this.state = {
      'navHidden': true
    }
  }
  
  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch(route.id) {
      case 'OnBoarding':
        return(<OnBoarding navigator={navigator} title="OnBoarding" />)
      case 'Authenticate':
        return(<Authenticate navigator={navigator} title='Authenticate' />)
    }
  }
  
  render() {
    return (
      <Navigator
        initialRoute={{
          id:'OnBoarding'
        }}
        renderScene={
          this.navigatorRenderScene
        }
      />
    )
  }
}

AppRegistry.registerComponent('Project', () => Surge);
