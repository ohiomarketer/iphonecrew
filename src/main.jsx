import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD8BpQoXI3lF6Y8qbGFxXqglw3oEE8K9y4",
  authDomain: "sdofsd-8da20.firebaseapp.com",
  projectId: "sdofsd-8da20",
  storageBucket: "sdofsd-8da20.appspot.com",
  messagingSenderId: "682664684924",
  appId: "1:682664684924:web:933eac590bbd199cbec8f9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
