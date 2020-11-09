import * as firebase from 'firebase'
require('@firebase/firestore')

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC-RtVhBwXEUAf4yADg8dl3CLqMbeApGJk",
    authDomain: "pro71-e98e1.firebaseapp.com",
    databaseURL: "https://pro71-e98e1.firebaseio.com",
    projectId: "pro71-e98e1",
    storageBucket: "pro71-e98e1.appspot.com",
    messagingSenderId: "754074210721",
    appId: "1:754074210721:web:563eb80c4a7dc00888fbe0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()