import firebase from "firebase";

const config = {
  apiKey: "AIzaSyABqajVZMjeA7QQYbAKxVv65hbGAnh58_I",
  authDomain: "learning-stamp.firebaseapp.com",
  databaseURL: "https://learning-stamp.firebaseio.com",
};

firebase.initializeApp(config);
export const database = firebase.database();
export const databaseRef = firebase.database().ref();
