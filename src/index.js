import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/css/App.css';
import Firebase, { FirebaseContext } from './components/Firebase';

import App from '../src/App';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.querySelector('#root'),
);