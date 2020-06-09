import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoadingController, ModalController, NavController} from '@ionic/angular';
import {LoginService} from "../../services/login/login.service";
import {User} from "../../models/user";
import { Storage } from '@ionic/storage';
import {Token} from '../../models/token';
import {ForgetPasswordPage} from '../forget-password/forget-password.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public loginFormGroup = new FormGroup({
    email:new FormControl('', Validators.required),
    password:new FormControl('', Validators.required)
  });
  client:User;
  error:string;
  token:Token;
  constructor(public modalController: ModalController ,public loadingController: LoadingController ,public storage:Storage ,private loginService: LoginService , private router: Router, private navCtrl: NavController) {}


  onConnect() {
    console.log('onConnect')
    // console.log(this.loginFormGroup.value)
    // this.navCtrl.navigateForward("accueil");
    this.client = this.loginFormGroup.value
    console.log(this.client)

    this.loginService.login(this.client).subscribe(profile => {
      console.log(profile);
      this.token = profile;
      localStorage.setItem('token',this.token.token);
      // this.storage.set('token',this.token.token);
      this.navCtrl.navigateForward("accueil");
    },error => {
      this.error=error.error.message;
      console.log(this.error);


    })
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 100

    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    this.onConnect();
  }

  async forgetPassword() {
    this.navCtrl.navigateBack("forget-password");
  }




}
