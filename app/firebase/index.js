import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyAKTnVlJsO5HQTpu5iffFcRWTE7iAr8UiE",
        authDomain: "todo-app-4694b.firebaseapp.com",
        databaseURL: "https://todo-app-4694b.firebaseio.com",
        storageBucket: "todo-app-4694b.appspot.com",
        messagingSenderId: "886645536873"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;