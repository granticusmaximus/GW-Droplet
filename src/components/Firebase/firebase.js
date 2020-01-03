import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDEwI2dhwfIJz8MYyp4AkecHNr5oZ1-9UI",
    authDomain: "grantwatsonapp.firebaseapp.com",
    databaseURL: "https://grantwatsonapp.firebaseio.com",
    projectId: "grantwatsonapp",
    storageBucket: "grantwatsonapp.appspot.com",
    messagingSenderId: "558943583214",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
