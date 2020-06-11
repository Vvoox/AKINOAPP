import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  host=environment.host;
  constructor(public  http:HttpClient) { }

   getProfile(){
    let headers= new HttpHeaders();
    headers = headers.append("Authorization", "Bearer " +localStorage.getItem("token"))
    return this.http.get(this.host+"/profile",{headers});
  }

    public downloadImage(imageName){
        let headers= new HttpHeaders();
        headers = headers.append("Authorization", "Bearer " +localStorage.getItem("token"))
        return this.http.get(this.host+"/avatar/"+imageName,{headers,responseType: "blob"});
    }

    // modifyProfile(){
    //
    // }
}
