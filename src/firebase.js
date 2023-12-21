// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAVuZkfUV1CH0JvPkL3nBigkZaKDQugVo4',
  authDomain: 'inclusifit-a3dc4.firebaseapp.com',
  projectId: 'inclusifit-a3dc4',
  storageBucket: 'inclusifit-a3dc4.appspot.com',
  messagingSenderId: '873723684960',
  appId: '1:873723684960:web:2a35d78f5b5a37d973fb05',
  measurementId: 'G-8Y87NVGTH0'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
