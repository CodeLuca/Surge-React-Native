
import React, { Component } from 'react';
import _ from 'lodash';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert
} from 'react-native';

// Import components
import Nav from '../layout/nav.ios.js';
import t from 'tcomb-form-native';
import stylesheet from '../../public/styles/form.js';
import authStyles from '../../public/styles/authStyles.js';

import firebase from 'firebase';

const i18n = require('tcomb-form-native/lib/i18n/en');
const templates = require('tcomb-form-native/lib/templates/bootstrap');

const Form = t.form.Form;
const Person = t.struct({
        email: t.String,
        password: t.String,
      });

const options = {
  stylesheet: stylesheet,
  auto: 'placeholders',
  fields: {
    password: {
      secureTextEntry: true
    }
  }
};

class Register extends Component {
  constructor() {
    super();
    this.state = {
      value: {
        'email': '',
        'password': ''
      },
    }
  }
  
  register() {
    firebase.auth().createUserWithEmailAndPassword(
      this.state.value.email,
      this.state.value.password
    ).then(function() {
      Alert.alert("suge:", 'Your account was created!');
    }).catch(function(error) {
      switch(error.code){
        case "auth/email-already-in-use":
          Alert.alert("Surge:", "The new user account cannot be created because the email is already in use.");
        break;
        case "auth/invalid-email":
          Alert.alert("Surge:", "The specified email is not a valid email.");
        break;
        case "auth/weak-password":
          Alert.alert("Surge:", "Your password is too weak.")
        break;
        default:
          Alert.alert("Surge:", "Error creating user: " + error.code);
      }
    });
  }
  
  onChange(value) {
    this.setState({value});
  }
  
  render() {
    return (
      <View style={authStyles.container}>
        <Text style={{color: '#fff', fontSize: 50, fontWeight: 'bold', paddingBottom: 30}}>register.</Text>
        <Form
          ref="form"
          type={Person}
          options={options}
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
        <TouchableHighlight style={authStyles.button} onPress={this.register.bind(this)} underlayColor='#99d9f4'>
          <Text style={authStyles.buttonText}>submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = Register;