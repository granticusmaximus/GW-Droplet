import firebase from "firebase/app";
import database from "firebase/database";


var config = {
  apiKey: "AIzaSyA8jkkTr1HVAguX31bWtpD1BIiVFf749W0",
  authDomain: "gwwebapp.firebaseapp.com",
  databaseURL: "https://gwwebapp.firebaseio.com",
  projectId: "gwwebapp",
  storageBucket: "gwwebapp.appspot.com",
  messagingSenderId: "232262519930",
  appId: "1:232262519930:web:5d79eeb55ff62a9b587fc3",
  measurementId: "G-J7391EFDDJ"
};
let firebaseCache;

export const fire = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};

