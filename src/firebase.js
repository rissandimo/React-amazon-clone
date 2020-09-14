import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHhHRPxKkBiI99KDPbJOu41-Ok2iJHjyY",
    authDomain: "clone-2f37e.firebaseapp.com",
    databaseURL: "https://clone-2f37e.firebaseio.com",
    projectId: "clone-2f37e",
    storageBucket: "clone-2f37e.appspot.com",
    messagingSenderId: "629389442384",
    appId: "1:629389442384:web:62861d376f329587ce8055",
    measurementId: "G-QES4KQ63WS"
});

const auth = firebase.auth();

export { auth };