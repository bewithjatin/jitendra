import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
navsd()
{
	this.navCtrl.push(ContactPage);
}
navsd1()
{
	this.navCtrl.push(AboutPage);
}
}
