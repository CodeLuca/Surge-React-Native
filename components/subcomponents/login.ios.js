
import React, { Component } from 'react';
import _ from 'lodash';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

// Import components
import Nav from '../layout/nav.ios.js';
import t from 'tcomb-form-native';
import stylesheet from '../../public/styles/form.js'

import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAjGBhIYsmd1Jhz5WRAkpnMAVf9oST7bD8",
  authDomain: "surgetest-268d9.firebaseapp.com",
  databaseURL: "https://surgetest-268d9.firebaseio.com",
  storageBucket: "surgetest-268d9.appspot.com",
};
firebase.initializeApp(config);

var i18n = require('tcomb-form-native/lib/i18n/en');
var templates = require('tcomb-form-native/lib/templates/bootstrap');

const Form = t.form.Form,
      Person = t.struct({
        username: t.String,              // a required string
        password: t.String,               // a required number
        rememberMe: t.Boolean        // a boolean
      }),
      styles = StyleSheet.create({
        buttonText: {
          fontSize: 18,
          color: 'white',
          alignSelf: 'center'
        },
        button: {
          height: 36,
          backgroundColor: '#37474F',
          borderColor: '#37474F',
          borderWidth: 1,
          borderRadius: 8,
          marginBottom: 10,
          alignSelf: 'stretch',
          justifyContent: 'center'
        }
      });

const options = {
  stylesheet: stylesheet,
  auto: 'placeholders',
  fields: {
    password: {
      password: true
    }
  }
};
class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: '#fff', fontSize: 50, fontWeight: 'bold', paddingBottom: 30}}>login.</Text>
        <Form
          ref="form"
          type={Person}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = Login;