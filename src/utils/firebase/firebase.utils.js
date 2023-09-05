// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,  GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import {
    getFirestore,
    doc,
    setDoc,
    getDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCxmOanoIRee_dy1-TfIFXBu8AMyv7NnI",
  authDomain: "crown-clothing-db-fada3.firebaseapp.com",
  projectId: "crown-clothing-db-fada3",
  storageBucket: "crown-clothing-db-fada3.appspot.com",
  messagingSenderId: "725053890731",
  appId: "1:725053890731:web:40c9803df0c878374d17ee"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//it's a Google auth class so using new to initilize a new instance. 
const provider = new GoogleAuthProvider();

//setCustomParameters are specific to GoogleAuthProvider class. 
provider.setCustomParameters({
    prompt: 'select_account'
});

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();
//you will pass auth and provider instances to signInWithPopup fucntion
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//initialize getFirestore method and get a reference to your app
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    //doc() takes in three arguments, db, collection, and user id
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userAuth.uid);
    
    console.log(userDocRef);

    //get data related to the document
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    //if user data doesn't exit
    //create/set the doc with data from userAuth in my collection
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            setDoc( userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch(error) {
            console.log('error creating message', error.message) 
        }
    }
    
    //if user data exists
    return userDocRef;
}