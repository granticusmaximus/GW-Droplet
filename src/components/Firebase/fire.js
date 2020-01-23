import firebase from 'firebase'


var config = {
    apiKey: "AIzaSyDEwI2dhwfIJz8MYyp4AkecHNr5oZ1-9UI",
    authDomain: "grantwatsonapp.firebaseapp.com",
    databaseURL: "https://grantwatsonapp.firebaseio.com",
    projectId: "grantwatsonapp",
    storageBucket: "grantwatsonapp.appspot.com",
    messagingSenderId: "558943583214",
};
var fire = firebase.initializeApp(config);
export default fire;

