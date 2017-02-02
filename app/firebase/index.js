import firebase from 'firebase';

try {
    var config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL:"https://todo-app-test-e213a.firebaseio.com",
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: "886645536873"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;