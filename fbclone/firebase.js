import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'
//import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDJpVf3s_pAddJmbylV_74EAw0XCuki7GE",
    authDomain: "facebook-clone-d646e.firebaseapp.com",
    projectId: "facebook-clone-d646e",
    storageBucket: "facebook-clone-d646e.appspot.com",
    messagingSenderId: "39792933564",
    appId: "1:39792933564:web:2d060ba224922a020b6eb9"
  };


 //const app = !firebase.apps.length
     //? firebase.initializeApp(firebaseConfig)
     //: firebase.app();

const app = initializeApp(firebaseConfig)

const db = getFirestore();
const storage = getStorage(app);

export { db, storage };