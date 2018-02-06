import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Medico } from '../../models/medico';

import { UtilProvider } from '../../providers/util/util';
import { MedicosProvider } from '../../providers/medicos/medicos';
import {MedicosFormPage} from "../medicos-form/medicos-form";
import {MedicosListPage} from "../medicos-list/medicos-list";

/**
 * Generated class for the MedicosShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicos-show',
  templateUrl: 'medicos-show.html',
})
export class MedicosShowPage {
  private id: string;
  private medico: Medico;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private utilProvider: UtilProvider,
    private medicosProvider: MedicosProvider
  ) {
    this.id = this.navParams.get("id");
    this.getMedico();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicosShowPage');
  }

  getMedico(){
    this.utilProvider.presentLoading();
    this.medicosProvider.getMedico(this.id).subscribe(res => {
      this.utilProvider.hideLoading();
      this.medico = res;
      console.log(res);
    }, (err) => {
      this.utilProvider.hideLoading();
      this.utilProvider.error();
      console.log(err);
    });
  }

  editarMedico(){
    this.navCtrl.push(MedicosFormPage, {medico: this.medico});
  }

  excluirMedico(id: string){
    this.utilProvider.presentLoading();
    this.medicosProvider.deleteMedico(id).subscribe(res => {
      this.utilProvider.hideLoading();
      this.utilProvider.alertaPage("Exclusão feita com sucesso!", "Aviso", "Ok", () => this.navCtrl.setRoot(MedicosListPage));
      console.log(res);
    }, (err) => {
      this.utilProvider.hideLoading();
      this.utilProvider.error();
      console.log(err);
    });
  }
}
