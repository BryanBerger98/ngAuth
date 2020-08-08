import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngAuth';

  facebookProvider = new firebase.auth.FacebookAuthProvider();

  name: string;
  age: number;
  tall: boolean;

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyASPKDmVJSXpiGedBm5tnQP6cFOkoPBx1g',
      authDomain: 'masuperagence.firebaseapp.com',
      databaseURL: 'https://masuperagence.firebaseio.com',
      projectId: 'masuperagence',
      storageBucket: 'masuperagence.appspot.com',
      messagingSenderId: '454643787627',
      appId: '1:454643787627:web:6da846024a84ca309ace2e'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  ngOnInit() {
    firebase.auth().getRedirectResult().then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  onSignInWithFacebookPopUp() {
    firebase.auth().signInWithPopup(this.facebookProvider).then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  onSignInWithFacebookNewWindow() {
    firebase.auth().signInWithRedirect(this.facebookProvider);
  }

  onClickButton() {
    alert('Hello world');
  }

  onChangeTextInput($event) {
    // this.displayTextInput($event.target.value);
  }


}
