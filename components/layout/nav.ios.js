import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Nav extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, paddingTop: 15, color: 'white'}}>surge.</Text>
      </View>
    )
  }
}

export default Nav;