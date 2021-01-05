import firebase from "./firebase";

//comand given by firebase. so we copy the conffig we get from website and past it here
//is the key to our backend
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCqxg5VyZE5U0iBK0il6nwOhK6UP-2gaYI",
  authDomain: "to-do-app-7dcd1.firebaseapp.com",
  projectId: "to-do-app-7dcd1",
  storageBucket: "to-do-app-7dcd1.appspot.com",
  messagingSenderId: "555920955533",
  appId: "1:555920955533:web:f46b9271d20e3df88b6ac4",
  measurementId: "G-YH5YKYVR1S",
});

//storing firestore in db
const db = firebaseApp.firestore();

//exporting it so we can have access in anywere in our code
export default db;

//firebase has a database. see website
