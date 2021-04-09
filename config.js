import firebase from 'firebase';
require('@firebase/firestore')

 var firebaseConfig = {
    apiKey: "AIzaSyBFzc1tnJyQdZ1CCwuYum6lGqGjUYX7c7U",
    authDomain: "sample2-9052b.firebaseapp.com",
    databaseURL: "https://sample2-9052b.firebaseio.com",
    projectId: "sample2-9052b",
    storageBucket: "sample2-9052b.appspot.com",
    messagingSenderId: "784493609045",
    appId: "1:784493609045:web:918380703682ca5f6654dc"
  };



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
