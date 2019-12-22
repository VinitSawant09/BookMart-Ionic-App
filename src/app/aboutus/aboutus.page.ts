import { Component, OnInit } from '@angular/core';
     
import { Geolocation ,GeolocationOptions } from '@ionic-native/geolocation';
import { GoogleMap } from '@ionic-native/google-maps';      

import { NgZone, ElementRef, ViewChild } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Geoposition ,PositionError } from '@ionic-native/geolocation'; 
@Component({
  selector: 'app-list',
  templateUrl: 'aboutus.page.html',
  styleUrls: ['aboutus.page.scss']
})



export class AboutusPage implements OnInit {

 


  ngOnInit() {
   
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
