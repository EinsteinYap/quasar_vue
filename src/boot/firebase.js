import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

var firebaseConfig = {
  // YOUR CONFIG HERE
  apiKey: "AIzaSyAob821GmjR4m4JEz_spAZXKMl26oBhEnA",
    authDomain: "quasar-vue-todoapp.firebaseapp.com",
    databaseURL: "https://quasar-vue-todoapp-default-rtdb.firebaseio.com",
    projectId: "quasar-vue-todoapp",
    storageBucket: "quasar-vue-todoapp.appspot.com",
    messagingSenderId: "569115843180",
    appId: "1:569115843180:web:8e53a5cd04e0355f461649"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth,firebaseDb }