//punto de entrada de la app
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyDT7Rgx-2g3dd4LPF8BCWkokXrazikEGT8",
    authDomain: "prueba-framework.firebaseapp.com",
    databaseURL: "https://prueba-framework.firebaseio.com",
    projectId: "prueba-framework",
    storageBucket: "prueba-framework.appspot.com",
    messagingSenderId: "1053411059149"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
