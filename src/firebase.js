import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail} from 'firebase/auth'


const app = initializeApp({
  apiKey: "AIzaSyAhehilJyAB0O97VH1VJBIp8qYtB0xPYoo",
  authDomain: "auth-test-a77c0.firebaseapp.com",
  projectId: "auth-test-a77c0",
  storageBucket: "auth-test-a77c0.appspot.com",
  messagingSenderId: "261529436770",
  appId: "1:261529436770:web:f7fcedab56e3b845e1073b"
});

export const auth = getAuth(app);
export const methods = {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendPasswordResetEmail, 
    
}

export default app