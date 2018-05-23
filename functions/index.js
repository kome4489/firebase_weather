const functions = require('firebase-functions');
const firebase = require('firebase');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// Initialize Firebase
var config = {
    apiKey: "AIzaSyADIElM3BZDSzAVboB0m11YKqXpRL5O0E4",
    authDomain: "weather-e382e.firebaseapp.com",
    databaseURL: "https://weather-e382e.firebaseio.com",
    projectId: "weather-e382e",
    storageBucket: "weather-e382e.appspot.com",
    messagingSenderId: "563353375511"
};
firebase.initializeApp(config);

exports.readDatebaseTest = functions.https.onRequest((request, response) => {
    var ref = firebase.database().ref("user");
    ref.on("value", function(snapshot) {
      response.send(JSON.stringify({ message: snapshot }));
    });
});