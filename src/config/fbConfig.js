import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDIjZxSqHmLjQNzDwx8wEowdM7GFvmexY",
  authDomain: "timetable-2897e.firebaseapp.com",
  projectId: "timetable-2897e",
  storageBucket: "timetable-2897e.appspot.com",
  messagingSenderId: "259473945436",
  appId: "1:259473945436:web:a0546a6b79a95e6db7c799"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore()

export default firebase;