import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD_hFOoUhaKAExRprhuoRCT99x4sodyBfE",
    authDomain: "app-merakihomefy-bb020.firebaseapp.com",
    projectId: "app-merakihomefy-bb020",
    storageBucket: "app-merakihomefy-bb020.appspot.com",
    messagingSenderId: "198485648048",
    appId: "1:198485648048:web:46a2a27f79bf4fd3835175"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)
