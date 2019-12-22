import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA-kbkcwbcOyxnhR0xMLA_BRH4kep07SLY",
    authDomain: "mypet-b355d.firebaseapp.com",
    projectId: "mypet-b355d",
    databaseURL: "https://mypet-b355d.firebaseio.com",
    storageBucket: "mypet-b355d.appspot.com",
    messagingSenderId: "253534015503",
    appId: "1:253534015503:android:acc7d6659508bd87bcd37a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();