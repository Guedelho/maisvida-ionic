import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

/*
  Generated class for the Oauth2Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const URL: String = "http://localhost:8080";

@Injectable()
export class Oauth2Provider {
  private _token: String;

  constructor(public http: HttpClient) {
    console.log('Hello Oauth2Provider Provider');
  }

  get token():String{
    return this._token;
  }

  set token(token: String){
    this._token = token;
  }

  authToken(user: string, password: string): Observable<any>{
    let headers = new HttpHeaders()
    .append("Authorization", "Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0")//base64 my-trusted-client:secret
    .append("Content-Type", "application/x-www-form-urlencoded");

    let params = new HttpParams()
      .append("grant_type", "password")
      .append("username", user)
      .append("password", Md5.hashStr(password).toString());//user

    return this.http.post(URL + "/oauth/token", {}, {withCredentials: true, headers: headers, params: params}).map(res => res);
  }
}
