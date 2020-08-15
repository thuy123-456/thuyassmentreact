import firebase from 'firebase/app';
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyCNkBstbBg-cj5ANBPYBSiWF_l59Z0S0E4",
    authDomain: "reactjs-fcc3d.firebaseapp.com",
    databaseURL: "https://reactjs-fcc3d.firebaseio.com",
    projectId: "reactjs-fcc3d",
    storageBucket: "reactjs-fcc3d.appspot.com",
    messagingSenderId: "1010263539171",
    appId: "1:1010263539171:web:4f2d8d2aa5ea85525ef4d6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };

