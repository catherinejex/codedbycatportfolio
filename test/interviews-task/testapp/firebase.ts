import {initializeApp} from "firebase/app";
import {connectFirestoreEmulator, getFirestore} from "firebase/firestore";
import {connectFunctionsEmulator, getFunctions} from "firebase/functions";

let db, functions;
const firebaseConfig = {

    apiKey: "AIzaSyAfcYtowkOLnDzz8hf6prcbN1XHb8IuV40",
    authDomain: "fir-sequel1.firebaseapp.com",
    projectId: "temperature-for-london",
    storageBucket: "fir-sequel1.appspot.com",
    messagingSenderId: "420954242162",
    appId: "1:420954242162:web:d1fd10f58b707f0c2556eb",
    measurementId: "G-W67DQ2G1TL"
}

export async function init() {
    await initializeApp(firebaseConfig);
    db = getFirestore();
    functions = getFunctions();
    if (__DEV__) {
        connectFirestoreEmulator(db, "localhost", 8080)
        connectFunctionsEmulator(functions, "localhost", 5001)
    }
}

export {db, functions}
