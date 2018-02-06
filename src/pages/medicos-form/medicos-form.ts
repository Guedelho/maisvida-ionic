import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {MedicosListPage} from "../medicos-list/medicos-list";
import {Medico} from "../../models/medico";

import {MedicosProvider} from "../../providers/medicos/medicos";
import {UtilProvider} from "../../providers/util/util";

/**
 * Generated class for the MedicosFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicos-form',
  templateUrl: 'medicos-form.html',
})
export class MedicosFormPage {
  private medico: Medico;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private utilProvider: UtilProvider,
    private medicosProvider: MedicosProvider
  ) {
    this.medico = this.navParams.get("medico");
    if(!this.medico){
      this.medico = {
        id: 0,
        primeiroNome: "",
        ultimoNome: "",
        email: "",
        especialidade: "",
        estado: "",
        cidade: "",
        ativo: false,
        ocupado: false
      }
    }

    console.log(this.medico);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicosFormPage');
  }

  salvarMedico(){
    this.utilProvider.presentLoading();
    this.medicosProvider.saveMedico(this.medico).subscribe(res => {
      this.utilProvider.hideLoading();
      this.utilProvider.alertaPage("Médico salvo com sucesso!", "Aviso", "Ok", () => this.navCtrl.setRoot(MedicosListPage));
      console.log(res);
    }, (err) => {
      this.utilProvider.hideLoading();
      this.utilProvider.error();
      console.log(err);
    });
  }
}
