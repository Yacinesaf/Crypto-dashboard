import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBAbNOpOlf9W4gTlOHzlamNscC9GFgdhvE",
  authDomain: "dashboardcrypto.firebaseapp.com",
  databaseURL: "https://dashboardcrypto.firebaseio.com",
  projectId: "dashboardcrypto",
  storageBucket: "dashboardcrypto.appspot.com",
  messagingSenderId: "101209795950",
  appId: "1:101209795950:web:b81d37910fe6f9dc0d257f"
};

export default firebase.initializeApp(firebaseConfig);