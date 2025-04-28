// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // Please don't judge me for not having used an env file, I'm getting round to it! Honest!
  apiKey: 'AIzaSyBQOhriPP-OAcGhHMVUVn9DTpQ_bZW33Z0',
  authDomain: 'emmanuelberkowiczwebsite.firebaseapp.com',
  projectId: 'emmanuelberkowiczwebsite',
  storageBucket: 'emmanuelberkowiczwebsite.firebasestorage.app',
  messagingSenderId: '612608243797',
  appId: '1:612608243797:web:cf3581c53c63b52c31fcdc',
}

// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
