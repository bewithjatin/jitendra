import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BankPage } from '../bank/bank';
/**
 * Generated class for the RechargeinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rechargeinfo',
  templateUrl: 'rechargeinfo.html',
})
export class RechargeinfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RechargeinfoPage');
  }
   brf()
{
this.navCtrl.push(BankPage);	
}
 next(el) {
    el.setFocus();
  }
 
}
