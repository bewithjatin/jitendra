import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FastagregisterPage } from '../fastagregister/fastagregister';
import { RechargeinfoPage } from '../rechargeinfo/rechargeinfo';
/**
 * Generated class for the SelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
  }
navsdhfcfdd()
{
this.navCtrl.push(FastagregisterPage);	
}
navsdhfcfddfhfffh()
{
this.navCtrl.push(RechargeinfoPage);	
}

}
