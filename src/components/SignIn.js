import { Button } from '@mui/material';
import React from 'react';
import firebase from "firebase/compat/app";
import { auth } from "../firebase.js";


function SignIn() {
  function signInWihGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return <div>
      <Button onClick={signInWihGoogle}>
        グーグルでログインする
      </Button>
    </div>;  
}

export default SignIn;
