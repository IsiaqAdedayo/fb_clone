import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD2U3ZyeUYhdsQzA8YKT8NKCiBWKUhv61w",
    authDomain: "facebookclonedb.firebaseapp.com",
    projectId: "facebookclonedb",
    storageBucket: "facebookclonedb.appspot.com",
    messagingSenderId: "606642298489",
    appId: "1:606642298489:web:699d3db9beb886e89dbea8"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
