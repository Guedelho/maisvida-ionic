import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilProvider {

  private loading: any;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    console.log('Hello UtilProvider Provider');
  }

  presentLoading(msg: string = 'Carregando...') {
    this.loading = this.loading || this.loadingCtrl.create({
      content: msg
    })

    this.loading.present();
  }

  hideLoading() {
    this.loading && this.loading.dismiss();
    this.loading = null;
  }

  alerta(mensagem: string = "Mensagem", titulo: string = "Aviso", button: string = "Ok") {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: mensagem,
      buttons: [button]
    });
    alert.present();
  }

  alertaPage(mensagem: string = "Mensagem", titulo: string = "Aviso", button: string = "Ok", callback: any = null, params: any = null) {
    let alert = this.alertCtrl.create({
      title: titulo,
      message: mensagem,
      buttons: [{
          text: button,
          handler: () => {callback()}
        }]
    });
    alert.present();
  }

  error(err: string = "Erro desconhecido"){
    this.hideLoading();
    this.alerta(err, 'Erro');
  }
}
