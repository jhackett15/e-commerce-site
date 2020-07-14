import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


const config =
{
    apiKey: "AIzaSyDuz5ZvEsdAHJze9Wk4qnZygkC6pvfdA3U",
    authDomain: "crwn-clothing-31339.firebaseapp.com",
    databaseURL: "https://crwn-clothing-31339.firebaseio.com",
    projectId: "crwn-clothing-31339",
    storageBucket: "crwn-clothing-31339.appspot.com",
    messagingSenderId: "629026363324",
    appId: "1:629026363324:web:dbf77b284977bc26cafdb9",
    measurementId: "G-SB7HLXF2F8"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    //async function when they sign in
    if (!userAuth) return; //if it doesnt exist, return (do nothing)

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists){
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;

  };

  firebase.initializeApp(config);

	export const auth = firebase.auth();
	export const firestore = firebase.firestore();

	const provider = new firebase.auth.GoogleAuthProvider();
	provider.setCustomParameters ({prompt: 'select_account'})
	export const signInWithGoogle = () => auth.signInWithPopup(provider);

	export default firebase;