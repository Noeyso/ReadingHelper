import firebase from 'firebase/app';
import "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();


export function loginGoogle(){
  return firebase.auth().signInWithPopup(provider).catch(console.error);
};

export function logoutGoogle(){
  return firebase.auth().signOut().catch(console.error);
}

export function onUserStateChange(callback:Function){
  return firebase.auth().onAuthStateChanged((user) => {
    callback(user)
  });
}