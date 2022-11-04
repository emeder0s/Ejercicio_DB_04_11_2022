// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {getFirestore, collection, getDocs, doc, setDoc} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi7xRIAbbeqMfWLxax9A9NCuQGp4HwnRA",
  authDomain: "ejerciciodb-ea862.firebaseapp.com",
  projectId: "ejerciciodb-ea862",
  storageBucket: "ejerciciodb-ea862.appspot.com",
  messagingSenderId: "466725666660",
  appId: "1:466725666660:web:dc43983deddd9cdf270471"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const querySnapshot = await getDocs(collection(db, "Usuarios"));

function generateRandomIdUser(num) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
export async function insertUser(user) {
  await setDoc(doc(db, "Usuarios", generateRandomIdUser(20)), user);
  alert("Usuario insertado");
}