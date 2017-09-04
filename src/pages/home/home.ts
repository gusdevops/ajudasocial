import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { LoginProvider } from '../../providers/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, private loginProvider: LoginProvider) {

  }

  public entrar() {
    alert("entrar");
    this.loginProvider.login();
    this.navCtrl.setRoot(DashboardPage);
  }


  public addentry() {

  }
}
