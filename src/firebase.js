// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging ,getToken ,onMessage} from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxNERRZMkaumLO9wauUwkKpFjaz3i5EQo",
  authDomain: "tasker-c0002.firebaseapp.com",
  projectId: "tasker-c0002",
  storageBucket: "tasker-c0002.appspot.com",
  messagingSenderId: "184138483121",
  appId: "1:184138483121:web:9aea18505bd957c3f32990",
  measurementId: "G-3HWZ653PZ9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging(app);

