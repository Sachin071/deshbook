import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider,getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBqMawSGt7durv91CX5k3XYX_NJAtvG6zA",
    authDomain: "facebook-clone-46883.firebaseapp.com",
    databaseURL: "https://facebook-clone-46883.firebaseio.com",
    projectId: "facebook-clone-46883",
    storageBucket: "facebook-clone-46883.appspot.com",
    messagingSenderId: "977896607646",
    appId: "1:977896607646:web:0f0304256a5b50ba77108f",
    measurementId: "G-EZM0H41892"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export {auth,provider};
export default db;