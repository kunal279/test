import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ForgetPage } from '../forget/forget';
import { ChangePage } from '../change/change';
import { ListPage } from '../list/list';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  register(){
    this.navCtrl.push(RegisterPage);
  }
  forget(){
    this.navCtrl.push(ForgetPage);
  }
  change(){
    this.navCtrl.push(ChangePage);
  }
  list(){
    this.navCtrl.push(ListPage);
  }
}
