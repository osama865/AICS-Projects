import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCJWCxo39GqGdue08QPYKrl8Q_WHQvx_8c",
  authDomain: "o-firegram.firebaseapp.com",
  databaseURL: "https://o-firegram.firebaseio.com",
  projectId: "o-firegram",
  storageBucket: "o-firegram.appspot.com",
  messagingSenderId: "1063341242851",
  appId: "1:1063341242851:web:ab5c8e628ba82dd48f08d6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timeStamp };
