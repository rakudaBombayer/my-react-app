import React, { useState } from 'react';
import {db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";

function SendMessage() {
  const [message, setMessage] = useState("");
  function SendMessage(e) {
    e.preventDefault();

    const {uid, photoURL} = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
  return (
    <div>
      <form onSubmit={SendMessage}>
      <input className="sendMsg" type="text" placeholder='メッセージを入力してください' value={message} onChange={(e) => setMessage(e.target.value)}/>
      </form>
    </div>
  )
}

export default SendMessage;
