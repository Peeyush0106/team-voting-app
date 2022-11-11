import fb from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC6yNe0Jdc94mywnWXOwHV2cAKDhT2Dh6g",
    authDomain: "team-voting-app-81766.firebaseapp.com",
    projectId: "team-voting-app-81766",
    storageBucket: "team-voting-app-81766.appspot.com",
    messagingSenderId: "467702018350",
    appId: "1:467702018350:web:46cb939e91734ba8be4abf"
};

// Initialize Firebase
fb.initializeApp(firebaseConfig);

export default fb.database();