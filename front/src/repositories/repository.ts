import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAVHis0X25jmqKcxuLm0Tmswt32Tj6ia0o',
  authDomain: 'calendar-app-25928.firebaseapp.com',
  projectId: 'calendar-app-25928',
  storageBucket: 'calendar-app-25928.appspot.com',
  messagingSenderId: '808250903300',
  appId: '1:808250903300:web:ebdaf9781c1a85927a1e51',
  measurementId: 'G-5M6GEG9L75',
});

export const db = getFirestore();
