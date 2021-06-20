export const firebaseAuthSnippet = `
import { ref, Ref } from 'vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp(JSON.parse(process.env.VITE_FIREBASE_CONFIG));

export const auth = firebase.auth();

export const db = firebase.firestore();

export const user: Ref<firebase.User | null> = ref(null);

auth.onAuthStateChanged((firebaseUser) => {
  if (firebaseUser) {
    user.value = firebaseUser;
  }
});

export const logout = async (): Promise<void> => {
  await auth.signOut();
};

export const signInWithGoogle = async (): Promise<firebase.auth.UserCredential> => {
  return auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
};
`;
