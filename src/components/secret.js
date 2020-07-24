var app = require('firebase/app');
require('firebase/auth');
require('firebase/database');

var firebaseConfig = {
    apiKey: "AIzaSyAS9y374RofwdenMKHP7Ai3jDHCUgXP56w",
    authDomain: "nugentlemenn.firebaseapp.com",
    databaseURL: "https://nugentlemenn.firebaseio.com",
    projectId: "nugentlemenn",
    storageBucket: "nugentlemenn.appspot.com",
    messagingSenderId: "302436495643",
    appId: "1:302436495643:web:6a952c321e3a70d01ca3be"
  };

app.initializeApp(firebaseConfig);
export default app;