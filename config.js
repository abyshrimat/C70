import *as firebase from 'firebase';
require("@firebase/firestore");
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCJSbHVCmCTspaTywfV5tOBla70mD2qg5U",
    authDomain: "storyhub-6a3ff.firebaseapp.com",
    projectId: "storyhub-6a3ff",
    storageBucket: "storyhub-6a3ff.appspot.com",
    messagingSenderId: "938670951060",
    appId: "1:938670951060:web:f253391876cc6751bd0281"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();