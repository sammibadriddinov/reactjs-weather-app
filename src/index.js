import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyB8sB67Vt4hFaqCHeKQcunEBHoRYsX-FYc",
  authDomain: "samar-chat.firebaseapp.com",
  projectId: "samar-chat",
  storageBucket: "samar-chat.appspot.com",
  messagingSenderId: "258982940245",
  appId: "1:258982940245:web:863372439c83916ddc4edc",
  measurementId: "G-SSEE9Q8MC4",
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
  <Context.Provider value={{ firestore, auth, firebase }}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
