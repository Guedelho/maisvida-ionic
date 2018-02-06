import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Oauth2Provider } from "../../providers/oauth2/oauth2";
import { UtilProvider } from '../../providers/util/util';

import { MedicosListPage } from '../medicos-list/medicos-list';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public user: string = "user";
  public password: string = "user";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private oauth2Provider: Oauth2Provider,
    private utilProvider: UtilProvider
  ) {

  }

  login(){
    if(this.user != "" && this.password !=""){
      this.utilProvider.presentLoading();
      this.oauth2Provider.authToken(this.user, this.password).subscribe(res => {
        this.utilProvider.hideLoading();
        this.oauth2Provider.token = res.access_token;
        this.navCtrl.setRoot(MedicosListPage);
        console.log(res);
      }, (err) => {
        this.utilProvider.hideLoading();
        this.utilProvider.error();
        console.log(err);
      })
    }else{
      this.utilProvider.error();
    }
    this.utilProvider.hideLoading();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
