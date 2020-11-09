import React from 'react';
import { Text,
         View,
         TextInput,
         StyleSheet,
         TouchableOpacity,
         KeyboardAvoidingView,
         ToastAndroid,
         Alert } from 'react-native';
import * as firebase from 'firebase'
import db from './config.js'

  const showAlert = () => {
    alert('YOUR STORY WAS SUBMITTED');
  };

export default class Write extends React.Component {
    render() {
      return (
        <KeyboardAvoidingView style={styles.container} behavior="paddng" enabled>
          <Text>Story name</Text>
          <TextInput style={styles.inputBox}/>
          <Text>Author name</Text>
          <TextInput style={styles.inputBox1}/>
          <Text>Write your story here</Text>
          <TextInput style={styles.inputBox2}/>
          <TouchableOpacity onPress={() => showAlert()}>
            <Text>SUBMIT</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
      );
    }
  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08b8b8',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBox: {
    marginTop: 25,
    width: '20%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 5,
    marginBottom: 50
  },
  inputBox1: {
    marginTop: 25,
    width: '20%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 5,
    marginBottom: 50
  },
  inputBox2: {
    marginTop: 25,
    width: '90%',
    alignSelf: 'center',
    height: '50%',
    textAlign: 'center',
    borderWidth: 5,
  },
  Button: {
    width: '20%',
    height: '5%',
    alignSelf: 'center',
    margin: 10,
    textAlign: 'center',
    backgroundColor: '#5155bb',
    justifyContent: 'center',
    alignItems: 'center'
  },
});