import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCXOq_BxatlZ9QnklIyJWdyDI6DpihKbf8",
    authDomain: "vue-modules.firebaseapp.com",
    databaseURL: "https://vue-modules.firebaseio.com",
    projectId: "vue-modules",
    storageBucket: "vue-modules.appspot.com",
    messagingSenderId: "328259631937",
    appId: "1:328259631937:web:de2ab1ad984cc9d277bfc0",
    measurementId: "G-XE6DXEDTSN"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;