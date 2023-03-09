import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAGI4Bi6uSCO_6iQwWG1XBAlWYp3ibpbyU',
	authDomain: 'poketft.firebaseapp.com',
	projectId: 'poketft',
	storageBucket: 'poketft.appspot.com',
	messagingSenderId: '657359098543',
	appId: '1:657359098543:web:b78fef467ebcc70c2aba5a',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
