import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  host=environment.host
  constructor(private http: HttpClient) { }

  public getAccount(id,numeroCompte){
    let headers= new HttpHeaders();
    headers = headers.append("Authorization", "Bearer " +localStorage.getItem("token"))
    return this.http.get(this.host+"/"+id+"/compte/"+numeroCompte,{headers});
  }
}
