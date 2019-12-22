import { Component, OnInit } from '@angular/core';
     
import { Geolocation ,GeolocationOptions } from '@ionic-native/geolocation';
import { GoogleMap } from '@ionic-native/google-maps';      

import { NgZone, ElementRef, ViewChild } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Geoposition ,PositionError } from '@ionic-native/geolocation'; 
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})



export class ListPage implements OnInit {

  @ViewChild('map',{static: false})mapElement: ElementRef;
  map:any;
  latLng:any;
  markers:any;
  mapOptions:any;  
  isKM:any=500;
  isType:any="";
 
  constructor(private ngZone: NgZone, private geolocation : Geolocation) { }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap(){
    
    this.geolocation.getCurrentPosition().then((position) => {

this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

          console.log('latLng',this.latLng);
     
      this.mapOptions = {
        center: this.latLng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }   

this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);

    }, (err) => {
      alert('err '+err);
    });

  }


 /*--------------------Find Nearby Place------------------------*/ 

  nearbyPlace(){
    this.loadMap();
    this.markers = [];
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
              location: this.latLng,
              radius: this.isKM,
              types: [this.isType]
            }, (results, status) => {
                this.callback(results, status);
            });
  }

  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }
  }

  createMarker(place){
    var placeLoc = place;
    console.log('placeLoc',placeLoc);
    this.markers = new google.maps.Marker({
        map: this.map,
        position: place.geometry.location
    });

    let infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(this.markers, 'click', () => {
      this.ngZone.run(() => {
        infowindow.setContent(place.name);
        infowindow.open(this.map, this.markers);
      });
    });
  }


  ngOnInit() {
   
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
