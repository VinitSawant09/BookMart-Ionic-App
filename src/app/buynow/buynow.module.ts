import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, EmailValidator } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuynowPageRoutingModule } from './buynow-routing.module';

import { BuynowPage } from './buynow.page';
import { SMS } from '@ionic-native/sms/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuynowPageRoutingModule
  ],
  providers:
  [
    EmailValidator,
    Vibration,
    SMS,
    AndroidPermissions


  ],
  declarations: [BuynowPage]
})
export class BuynowPageModule {}
