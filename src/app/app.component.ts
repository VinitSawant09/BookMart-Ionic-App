import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { setState, getState } from  'ts-state'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },/*
    {
      title: 'Shop List',
      url: '/list',
      icon: 'list'
    },*/
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'hand'
    },
    {
      title: 'Your Orders',
      url: '/orders',
      icon: 'list'
     
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.initializeApp();
    
  }

  
 

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      setState({bookBrought:[]});
    });
  }
}
