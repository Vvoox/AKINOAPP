import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanPageRoutingModule } from './scan-routing.module';

import { ScanPage } from './scan.page';
import {NavloginPageModule} from '../navlogin/navlogin.module';
import { QRCodeModule } from 'angularx-qrcode';
// import {NgxQRCodeModule} from 'ngx-qrcode2';
// import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {NavbarPageModule} from '../navbar/navbar.module';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import {QRScanner} from '@ionic-native/qr-scanner';
import {AndroidPermissions} from '@ionic-native/android-permissions';



// @ts-ignore
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanPageRoutingModule,
    NavloginPageModule,
    NavbarPageModule,
    QRCodeModule

  ],
  declarations: [ScanPage]
})
export class ScanPageModule {}
