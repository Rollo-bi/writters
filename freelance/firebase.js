// Initialize Firebase using the CDN version
const firebaseConfig = {
    apiKey: "AIzaSyDSzJimWxr3LlWm7etgNgsngGbBkwJzYrI",
    authDomain: "w3sfreelancewriter.firebaseapp.com",
    databaseURL: "https://w3sfreelancewriter-default-rtdb.firebaseio.com", // Make sure to set the database URL
    projectId: "w3sfreelancewriter",
    storageBucket: "w3sfreelancewriter.appspot.com",
    messagingSenderId: "743098413859",
    appId: "1:743098413859:web:0556daeff74b515afbd296",
    measurementId: "G-DRBCQ0GXPG"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the database
  const database = firebase.database(app);
  
  // Now you can use the database object for reading and writing data.
  