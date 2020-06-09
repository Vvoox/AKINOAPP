import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
// import {IonicStorageModule, Storage} from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { QRScanner } from '@ionic-native/qr-scanner';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import {IonicStorageModule} from '@ionic/storage';

// import { NgxQRCodeModule } from 'ngx-qrcode2';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// import {Base64ToGallery} from '@ionic-native/base64-to-gallery/ngx';
// import {QRScannerOriginal} from '@ionic-native/qr-scanner';
// import {ScanPage} from './components/scan/scan.page';

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [
      BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,HttpClientModule,
    IonicStorageModule.forRoot()
    // ,NgxQRCodeModul
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }

  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
