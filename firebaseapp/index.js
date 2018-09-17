import firebase from 'firebase'

let config = {

  apiKey: "AIzaSyA1NqWVCmN1u0Pga-7eF4pz3GwmBTB9FHo",
    authDomain: "trip-8c6a8.firebaseapp.com",
    databaseURL: "https://trip-8c6a8.firebaseio.com",
    projectId: "trip-8c6a8",
    storageBucket: "trip-8c6a8.appspot.com",
    messagingSenderId: "823766266948"

}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
