import { Component, OnInit } from '@angular/core';
import {QRScanner} from '@ionic-native/qr-scanner/ngx';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import {NavController, Platform} from '@ionic/angular';
import {QRScannerStatus} from '@ionic-native/qr-scanner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-camerapage',
  templateUrl: './camerapage.page.html',
  styleUrls: ['./camerapage.page.scss'],
})
export class CamerapagePage implements OnInit {

    code:string;
     aaaa: string = "123456"
  constructor(public navCtrl: NavController,
              public platform:Platform,
              public router: Router,
              public androidPermissions: AndroidPermissions,
              public qrScanner: QRScanner) {

    platform.ready().then(()=>{
      this.scan();
    })
  }

  ngOnInit() {
      // this.scan();
  }


  scan() {

    // Optionally request the permission early
          // Optionally request the permission early
          this.qrScanner.prepare()
              .then((status: QRScannerStatus) => {
                  if (status.authorized) {
                      let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                          localStorage.setItem('url',text);
                          this.qrScanner.hide(); // hide camera preview
                          scanSub.unsubscribe(); // stop scanning
                          this.navCtrl.pop();
                      });
                      this.qrScanner.resumePreview();
                      this.qrScanner.show()
                          .then((data : QRScannerStatus)=> {
                              // alert(data.showing);
                          },err => {
                              // alert(err);
                          });


                  } else if (status.denied) {
                      alert('denied');

                  } else {
                      alert('else');
                  }
              })
              .catch((e: any) => {
                  alert('Error is' + e);
              });

      // this.navCtrl.navigateForward("scan/"+this.code);

  }


    test() {
      localStorage.setItem('code',this.aaaa);
        this.router.navigateByUrl("scan");

    }
}
