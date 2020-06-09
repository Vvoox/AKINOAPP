import { Component, OnInit } from '@angular/core';
import {AlertController, NavController, Platform, ToastController} from '@ionic/angular';
import {LoginService} from '../../services/login/login.service';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import {CamerapagePage} from '../camerapage/camerapage.page';
import {ActivatedRoute} from '@angular/router';

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
    public showCamera = false;
    public textScanned: string = null;


    constructor(private activatedRoute: ActivatedRoute,
        private qrScanner: QRScanner,
                public alertController: AlertController ,
                public platform:Platform,
                private toastCtrl:ToastController ,
                private loginService : LoginService , private navCtrl: NavController  ) {

        // this.scancode();
        // alert(this.textScanned);
        // this.scannedCode = this.activatedRoute.snapshot.params.id;
        // localStorage.setItem('code', this.scannedCode);


    }


  token :string;
  ngOnInit() {
      this.token = localStorage.getItem('token');
  }

    ionViewWillEnter(){
        this.scannedCode = localStorage.getItem('code');
        console.log(localStorage.getItem('code'));

    }
      // alert(this.textScanned);}



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

    push() {
        this.navCtrl.navigateForward("camerapage");
    }

}
