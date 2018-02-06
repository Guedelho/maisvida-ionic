import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Medico } from '../../models/medico';

import { MedicosProvider } from '../../providers/medicos/medicos';
import { UtilProvider } from '../../providers/util/util';

import { MedicosShowPage } from '../medicos-show/medicos-show';
import {MedicosFormPage} from "../medicos-form/medicos-form";

/**
 * Generated class for the MedicosListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicos-list',
  templateUrl: 'medicos-list.html',
})
export class MedicosListPage {
  private medicos: Array<Medico>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private medicosProvider: MedicosProvider,
    public utilProvider: UtilProvider
  ) {
    this.getMedicos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicosListPage');
  }

  getMedicos(){
    this.utilProvider.presentLoading();
    this.medicosProvider.allMedicos().subscribe(res => {
      this.utilProvider.hideLoading();
      this.medicos = res;
      console.log(res);
    }, (err) => {
      this.utilProvider.hideLoading();
      this.utilProvider.error();
      console.log(err);
    });
  }

  verMedico(id: string){
    this.navCtrl.push(MedicosShowPage, {id: id});
  }

  adicionarMedico(){
    this.navCtrl.push(MedicosFormPage);
  }
}
