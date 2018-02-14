import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {InsumosPage} from '../pages/insumos/insumos';
import {ProveedoresPage} from '../pages/proveedores/proveedores';
import {LocalizacionPage} from '../pages/localizacion/localizacion';
import {ComprarPage} from '../pages/comprar/comprar';
import {FavoritosPage} from '../pages/favoritos/favoritos';
import {LoginPage} from '../pages/login/login';
import {RegistrarPage} from '../pages/registrar/registrar';
import {ResetPasswordPage} from '../pages/reset-password/reset-password';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { config } from './../config/app.config';
import * as firebase from 'firebase';
import { ProductsProvider } from '../providers/products/products';

firebase.initializeApp(config.firebasConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InsumosPage,
    ProveedoresPage,
    LocalizacionPage,
    ComprarPage,
    FavoritosPage,
    LoginPage,
    RegistrarPage,
    ResetPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InsumosPage,
    ProveedoresPage,
    LocalizacionPage,
    ComprarPage,
    FavoritosPage,
    LoginPage,
    RegistrarPage,
    ResetPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductsProvider
  ]
})
export class AppModule {}
