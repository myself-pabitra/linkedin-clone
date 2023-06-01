import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBQ-ahZUvs_VqDSSRgIfKnSt07PDAn74Fg",
  authDomain: "linkedin-clone-94722.firebaseapp.com",
  projectId: "linkedin-clone-94722",
  storageBucket: "linkedin-clone-94722.appspot.com",
  messagingSenderId: "116029423919",
  appId: "1:116029423919:web:960709d210932f1a66a1da",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebaseApp.storage().ref();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
