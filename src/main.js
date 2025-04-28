import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the router
import 'bootstrap/dist/css/bootstrap.min.css'
import './firebase/init.js'

// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyBQOhriPP-OAcGhHMVUVn9DTpQ_bZW33Z0',
//   authDomain: 'emmanuelberkowiczwebsite.firebaseapp.com',
//   projectId: 'emmanuelberkowiczwebsite',
//   storageBucket: 'emmanuelberkowiczwebsite.firebasestorage.app',
//   messagingSenderId: '612608243797',
//   appId: '1:612608243797:web:cf3581c53c63b52c31fcdc',
// }

// // Initialize Firebase

const app = createApp(App)
// initializeApp(firebaseConfig)

app.use(router) // Use the router

app.mount('#app')
