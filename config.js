import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCVa3LJWyzK-cu9jT4T_3Qhe1XWa7dmkBU",
  authDomain: "project-67-b8680.firebaseapp.com",
  projectId: "project-67-b8680",
  storageBucket: "project-67-b8680.appspot.com",
  messagingSenderId: "725629778097",
  appId: "1:725629778097:web:16240a85da7bb4cdab4a90"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
