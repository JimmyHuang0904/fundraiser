import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  zone: NgZone;
  constructor(platform: Platform) {
    this.zone = new NgZone({});
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      this.zone.run( () => {
      if (!user) {
        this.rootPage = LoginPage;
        unsubscribe();
      } else { 
        this.rootPage = TabsPage; 
        unsubscribe();
        }
      });
    });

    firebase.initializeApp({
      apiKey: "AIzaSyDeiW4s9jSJs-EOFEOsKHrlQKwymb76kYk",
      authDomain: "fundraiser-a8f5b.firebaseapp.com",
      databaseURL: "https://fundraiser-a8f5b.firebaseio.com",
      storageBucket: "fundraiser-a8f5b.appspot.com",
      messagingSenderId: "184169625132"
     });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
