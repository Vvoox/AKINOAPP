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
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import {IonicStorageModule} from '@ionic/storage';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';


@NgModule({
  declarations: [AppComponent ],
  entryComponents: [],
  imports: [
      BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    QRScanner,
      AndroidPermissions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }

  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
