import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGw1jFirx32U89ATJVZt5oSpom8zOKRRQ",
  authDomain: "coder-rj-19750.firebaseapp.com",
  projectId: "coder-rj-19750",
  storageBucket: "coder-rj-19750.appspot.com",
  messagingSenderId: "217968586573",
  appId: "1:217968586573:web:1bad3cb68c5a2d508d1104"
};

const app = firebase.initializeApp(firebaseConfig)


export const getFirestore = () => {
    return firebase.firestore(app)
}

// export const db = getFirestore()