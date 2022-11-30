import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAxu_MUTw_5j7kWyY0-59PcD3fWaPtsRSs",
	authDomain: "clone-8ed00.firebaseapp.com",
	projectId: "clone-8ed00",
	storageBucket: "clone-8ed00.appspot.com",
	messagingSenderId: "665651949941",
	appId: "1:665651949941:web:a10f703ca47e16be8b633c",
	measurementId: "G-DH4J341K1P"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
