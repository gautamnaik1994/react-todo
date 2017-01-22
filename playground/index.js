import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAKTnVlJsO5HQTpu5iffFcRWTE7iAr8UiE",
  authDomain: "todo-app-4694b.firebaseapp.com",
  databaseURL: "https://todo-app-4694b.firebaseio.com",
  storageBucket: "todo-app-4694b.appspot.com",
  messagingSenderId: "886645536873"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: 1.00
  },
  isRunning: true,
  user: {
    name: 'Gautam',
    age: 22
  }
});

// firebaseRef.update({
//   isRunning: false,
//   'app/name':'Todo'
// });
// firebaseRef.child('app').update({
//   name: 'KKKKK'
// });

// firebaseRef.update({
//   'app/name':'KKPP',
//   'user/name': 'POPOP'
// });

// firebaseRef.child('user').update({
//   name: 'YYYY'
// });
//firebaseRef.remove();
//firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//   version: 2.0,
//   name: null
// });

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got database ',snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch', e);
// });
// var logData=(snapshot) => {
//   console.log('Got value ',snapshot.val());
// }
// firebaseRef.on('value', logData);
//firebaseRef.off();

//firebaseRef.update({ isRunning: false });


var logData2 = (snapshot) => {
  console.log('Got value ', snapshot.val());
}
firebaseRef.child('user').on('value', logData2);
firebaseRef.update({
  'user/name': 'Nik'
});

//var notesRef = firebaseRef.child('notes');
// var newNoteRef = notesRef.push();
// newNoteRef.set({
//   text: 'Walk'
// });

// notesRef.on('child_added', (snapshot) => {
//   console.log('child added', snapshot.key, snapshot.val());
// });
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });

// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });


// var

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
   console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});
todosRef.push({
  text: 'Todo 2'
});