import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Button from 'react-native-button';

import firebase from 'firebase';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: '123'
    };
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          'user': JSON.stringify(user)
        })
      } else {
        this.setState({
          'user': 'Not logged in'
        })
      }
    });
  }                                  
  
  logout() {
    firebase.auth().signOut();
  }
  
  render() {
    return (
      <View>
        <Button
          containerStyle={{margin: 100}}
          style={{color: 'black'}}
          onPress={() => this.logout()}
        >
          signOut
        </Button>
        <Text>{this.state.user}</Text>
      </View>
    );
  }
}

module.exports = Profile;