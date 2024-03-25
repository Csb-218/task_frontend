// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');
console.log("hi")
// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyAxNERRZMkaumLO9wauUwkKpFjaz3i5EQo",
  authDomain: "tasker-c0002.firebaseapp.com",
  projectId: "tasker-c0002",
  storageBucket: "tasker-c0002.appspot.com",
  messagingSenderId: "184138483121",
  appId: "1:184138483121:web:9aea18505bd957c3f32990",
  measurementId: "G-3HWZ653PZ9"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});