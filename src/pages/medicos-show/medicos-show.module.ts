import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicosShowPage } from './medicos-show';

@NgModule({
  declarations: [
    MedicosShowPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicosShowPage),
  ],
})
export class MedicosShowPageModule {}
