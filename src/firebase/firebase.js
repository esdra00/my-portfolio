// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAJaemxQ79vrp17kh6J1eGqIKXvrMGZeqI",
	authDomain: "portfolio-20c72.firebaseapp.com",
	projectId: "portfolio-20c72",
	storageBucket: "portfolio-20c72.appspot.com",
	messagingSenderId: "1010269271384",
	appId: "1:1010269271384:web:91c6541e93f33d5c11e12d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const database = getFirestore(app);
