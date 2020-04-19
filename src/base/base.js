import firebase from "firebase";

const config = {
  apiKey: "AIzaSyABqajVZMjeA7QQYbAKxVv65hbGAnh58_I",
  authDomain: "learning-stamp.firebaseapp.com",
  databaseURL: "https://learning-stamp.firebaseio.com",
};

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const stampsRef = databaseRef.child("learning-stamp");
