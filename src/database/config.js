import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const config = {
  apiKey: "AIzaSyBJ6oA1NdQAo1yxbmgFmb6YdxWgdQUAHzQ",
  authDomain: "react-5e08a.firebaseapp.com",
  databaseURL: "https://react-5e08a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-5e08a",
  storageBucket: "react-5e08a.appspot.com",
  messagingSenderId: "294402921985",
  appId: "1:294402921985:web:98880c7239148fc6f45200"
};

const app = initializeApp(config)
const db = getDatabase(app);

export { db }
