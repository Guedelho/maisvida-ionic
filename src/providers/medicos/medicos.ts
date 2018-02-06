import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { Oauth2Provider } from '../oauth2/oauth2';
import { Medico } from '../../models/medico';

/*
  Generated class for the MedicosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const URL: String = "http://localhost:8080";
@Injectable()
export class MedicosProvider {
  private token: String;

  constructor(public http: HttpClient, private oauth2Provider: Oauth2Provider) {
    this.token = this.oauth2Provider.token;
  }

  allMedicos(): Observable<any>{
    return this.http.get(URL + "/allMedicos?access_token=" + this.token).map(res => res);
  }

  getMedico(id: string): Observable<any>{
    return this.http.get(URL + "/getMedico/" + id + "?access_token=" + this.token).map(res => res);
  }

  saveMedico(medico: Medico): Observable<any>{
    return this.http.put(URL + "/saveMedico?access_token=" + this.token, medico).map(res => res);
  }

  deleteMedico(id: string): Observable<any>{
    return this.http.delete(URL + "/deleteMedico/" + id + "?access_token=" + this.token);
  }
}
