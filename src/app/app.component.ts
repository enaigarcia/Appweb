import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {InsumosPage} from '../pages/insumos/insumos';
import {ProveedoresPage} from '../pages/proveedores/proveedores';
import {LocalizacionPage} from '../pages/localizacion/localizacion';
import {LoginPage} from '../pages/login/login';
import {RegistrarPage} from '../pages/registrar/registrar';
import {ComprarPage} from '../pages/comprar/comprar';
import {FavoritosPage} from '../pages/favoritos/favoritos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any,icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage,icon:'home'},
      { title: 'Productos', component: ListPage,icon:'archive'},
      {title:'Insumos',component: InsumosPage,icon:'beaker'},
      {title:'Proveedores',component:ProveedoresPage,icon:'people'},
      {title:'Encontrar Lugares',component:LocalizacionPage,icon:'globe'},
      {title:'Comprar',component: ComprarPage,icon:'card'},
      {title:'Favoritos',component:FavoritosPage,icon:'star'},
      {title: 'Login', component:LoginPage,icon:'contact'},
      {title: 'Registrar',component:RegistrarPage,icon:'person-add'}

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
