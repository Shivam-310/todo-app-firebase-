import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDiZlgPTeQJSLrc9BjkL3_eXI16m3E0SIk",
    authDomain: "todo-app-9d0dc.firebaseapp.com",
    projectId: "todo-app-9d0dc",
    storageBucket: "todo-app-9d0dc.appspot.com",
    messagingSenderId: "433128263124",
    appId: "1:433128263124:web:c66f50d12cf1003f6a5a41",
    measurementId: "G-F1VFE1HS7R"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore( );

export {db};