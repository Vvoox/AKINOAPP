import { Component, OnInit } from '@angular/core';
import {AlertController, NavController, Platform, ToastController} from '@ionic/angular';
import {LoginService} from '../../services/login/login.service';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import {CamerapagePage} from '../camerapage/camerapage.page';
import {ActivatedRoute, Router} from '@angular/router';
import * as OTPAuth from "otpauth";


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
     showCamera = false;
     textScanned: string = null;
     timer: any;
     counter:number = 30;
     qrUrl:boolean = false;
     numb : number = 1;



    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
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
    errorQR:string;
  ngOnInit() {
      this.token = localStorage.getItem('token');
      this.counter=30;
      // if(localStorage.getItem('url')) {
      //     this.qrUrl=true;
      //     let uri = localStorage.getItem('url');
      //     let parsedTotp = OTPAuth.URI.parse(uri);
      //     this.scannedCode = parsedTotp.generate();
      //     this.doCountDown();
      //     }

  }
    //
    ionViewWillEnter(){
        if(localStorage.getItem('url')) {
            this.qrUrl=true;
            let uri = localStorage.getItem('url');
            let parsedTotp = OTPAuth.URI.parse(uri);
            this.scannedCode = parsedTotp.generate();
            this.doCountDown();
        }

    }

    doCountDown(){
      setTimeout(()=>{
          this.counter=this.counter - this.numb;
          this.processCountDown();
      }, 1000);
    }

    processCountDown() {
      if(this.counter == 0){
          console.log("end");
          this.ionViewWillEnter();
          this.counter = 30;
      }
      else{
          this.doCountDown();
      }
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

    push() {
        this.navCtrl.navigateForward("camerapage");
    }


    deleteQRSession() {
        localStorage.removeItem('url');
        this.counter=30;
        this.numb =1;
        // this.ngOnInit();
         // window.location.reload();
        // this.navCtrl.pop();
        // this.router.navigateByUrl("scan");
        // this.navCtrl.navigateBack("home");
        this.navCtrl.navigateForward("scan/scan");
  }
}
