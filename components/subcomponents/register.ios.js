
import React, { Component } from 'react';
import _ from 'lodash';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert
} from 'react-native';

// Import 3rd party components
import t from 'tcomb-form-native';
import i18n from 'tcomb-form-native/lib/i18n/en';
import templates from 'tcomb-form-native/lib/templates/bootstrap';
import Spinner from 'react-native-loading-spinner-overlay';

// Import Styles
import formStyles from '../../public/styles/formStyles.js';
import authStyles from '../../public/styles/authStyles.js';

// Import Firebase
import firebase from 'firebase';

// Setup Form
const Form = t.form.Form;
const Person = t.struct({
        email: t.String,
        password: t.String,
      });

// Form Options
const options = {
  stylesheet: formStyles,
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
    // Set placeholder states.
    this.state = {
      value: {
        'email': '',
        'password': ''
      },
      visible: false 
    }
  }
  
  // Firebase registration
  register() {
    this.setState({
      visible: true
    })
    firebase.auth().createUserWithEmailAndPassword(
      this.state.value.email,
      this.state.value.password
    ).then(() => {
      this.setState({
        visible: false
      })
    }).catch((error) => {
      this.setState({
        visible: false
      })
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
          Alert.alert("Surge:", "Error creating user: " + error.message);
      }
    });
  }
  
  // Check if any form values change
  onChange(value) {
    this.setState({value});
  }
  
  render() {
    return (
      <View style={authStyles.container}>
        <Spinner visible={this.state.visible} />
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