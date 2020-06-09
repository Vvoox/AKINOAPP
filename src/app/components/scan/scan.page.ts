import { Component, OnInit } from '@angular/core';
// import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {NavController, ToastController} from '@ionic/angular';
import {LoginService} from '../../services/login/login.service';
// import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
// import {Base64ToGallery} from '@ionic-native/base64-to-gallery/ngx';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
    createdCode = null;
    scannedCode = null;
    qrData ="KHALIL";
    title = 'app';
    elementType = 'url';

  constructor(private toastCtrl:ToastController ,private loginService : LoginService , private navCtrl: NavController  ) { }


  token :string;
  ngOnInit() {
      this.token = localStorage.getItem('token');
  }

  // createCode(){
  //     this.createdCode =this.qrData
  // }

  scan() {
      console.log("scan")
  }

    logout() {
        this.loginService.logout().subscribe(response =>{
            console.log(response);
            localStorage.removeItem('token');
            this.navCtrl.navigateBack("home")
        },error => {
            console.log(error);
        })
    }

    back() {
      if(localStorage.getItem('token')){
          this.navCtrl.navigateBack("accueil")
      }
      else{
          this.navCtrl.navigateBack("home")
      }
    }

}
