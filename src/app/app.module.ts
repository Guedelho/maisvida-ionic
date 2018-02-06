import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MedicosListPage } from '../pages/medicos-list/medicos-list';
import { MedicosFormPage } from '../pages/medicos-form/medicos-form';
import { MedicosShowPage } from '../pages/medicos-show/medicos-show';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MedicosProvider } from '../providers/medicos/medicos';
import { Oauth2Provider } from '../providers/oauth2/oauth2';
import { UtilProvider } from '../providers/util/util';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MedicosListPage,
    MedicosFormPage,
    MedicosShowPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MedicosListPage,
    MedicosFormPage,
    MedicosShowPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    HttpClient,
    Oauth2Provider,
    MedicosProvider,
    UtilProvider
  ]
})
export class AppModule {}
