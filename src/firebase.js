import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

// Firebase configurations
const firebaseConfig = {
  apiKey: "AIzaSyC86631nbR9vV25_UT5xLq8XOYHT3bQ0Do",
  authDomain: "pocagathaloginsms.firebaseapp.com",
  projectId: "pocagathaloginsms",
  storageBucket: "pocagathaloginsms.appspot.com",
  messagingSenderId: "587368615561",
  appId: "1:587368615561:web:cddeb9f2fa31d3df578058",
  measurementId: "G-JE5X62Q6V0"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
