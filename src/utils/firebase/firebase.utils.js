import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC4KpKJkVpayMdYq2YiWcob9cswf5gxuNQ",
    authDomain: "dooda-clothing-db.firebaseapp.com",
    projectId: "dooda-clothing-db",
    storageBucket: "dooda-clothing-db.appspot.com",
    messagingSenderId: "884604855609",
    appId: "1:884604855609:web:a218221f2454a44839b4e8"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    promt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup =  () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
  };