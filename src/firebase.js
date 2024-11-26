
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYSE51ZPB7WlzLMQIWAib7MGfTXdpJwC4",
  authDomain: "disneyplus-clone-b7b4a.firebaseapp.com",
  projectId: "disneyplus-clone-b7b4a",
  storageBucket: "disneyplus-clone-b7b4a.firebasestorage.app",
  messagingSenderId: "802566679581",
  appId: "1:802566679581:web:77ad61dce6218dadc96af4"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;