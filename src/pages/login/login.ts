import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RegistrarPage} from '../registrar/registrar';
import {ResetPasswordPage} from '../reset-password/reset-password';
 /**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToSignup(){
    this.navCtrl.push(RegistrarPage);
  }

  goToResetPassword(){
    this.navCtrl.push(ResetPasswordPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
