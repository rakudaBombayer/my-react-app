import React, { useState } from 'react';
import {db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import { Input } from '@mui/material';
import SendIcon  from '@mui/icons-material/Send';
import { Style }  from '@mui/icons-material';

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
    setMessage("");
  }
  return (
    <div>
      <form onSubmit={SendMessage}>
        <Input className="sendMsg" type="text" 
        style={{
          width: "78%",
          fontSize: "15px",
          fontWeight: "550",
          marginLeft: "5px",
          marginBottom: "-3px",
        }}
        placeholder='メッセージを入力してください' value={message} onChange={(e) => setMessage(e.target.value)}
         />
        <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px"}}/>
        </form>
      </div>
  )
}


export default SendMessage;
