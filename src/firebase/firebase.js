import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDwuA9i2ZrQq_Ydcox0_gB5VyyM9Zy1VjI",
    authDomain: "appluo-a1f3f.firebaseapp.com",
    databaseURL: "https://appluo-a1f3f.firebaseio.com",
    projectId: "appluo-a1f3f",
    storageBucket: "appluo-a1f3f.appspot.com",
    messagingSenderId: "347869223683"
}
firebase.initializeApp(config)
const database = firebase.database()

export { firebase, database as default }