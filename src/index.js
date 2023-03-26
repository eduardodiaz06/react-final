import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMWRRlJh-GWpmm3-Nu4LBdQN6_ZdUIKPg",
  authDomain: "react-73aea.firebaseapp.com",
  projectId: "react-73aea",
  storageBucket: "react-73aea.appspot.com",
  messagingSenderId: "481003210307",
  appId: "1:481003210307:web:e56137a3e0aa66b9fd36f6"
};

const app =initializeApp(firebaseConfig);
getFirestore(app)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
