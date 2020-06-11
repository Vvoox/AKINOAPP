import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {User} from "../../models/user";
import {HttpClient} from "@angular/common/http";
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  host = environment.loginHost;
  deco = environment.logout;
  token: string;

  constructor(private http: HttpClient , private storage: Storage)  { }

  login(user:User){
    return this.http.post(this.host+"/auth",user);
  }

  logout(){
    this.token = localStorage.getItem('token');
    console.log(this.token);
    const data = new FormData();
    data.append('token',this.token);
    return this.http.post(this.deco,data);
  }

  forgetPassword(email){
    let data = new FormData();
    data.append('email',email);
    return this.http.post("http://192.168.1.100:8080/api/forgot_password",data,{responseType:'text'});
  }

}
