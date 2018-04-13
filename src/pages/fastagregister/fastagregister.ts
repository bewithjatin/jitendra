import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InvoicePage } from '../invoice/invoice';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the FastagregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fastagregister',
  templateUrl: 'fastagregister.html',
})
export class FastagregisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FastagregisterPage');
  }
  register() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
var veh=this.vehtype;
var o11=this.o1;
var o12=this.o2;
var o13=this.o3;
var o14=this.o4;
var o15=this.o5;
var o16=this.o6;
var o17=this.o7;
var addhfdg=this.add;
var driv=this.dl;
var dob=this.myDate;
  if(!veh || !o11 || !o12 || !o13 || !o14 || !o15 || !o16 || !o17 || !addhfdg || !driv || !dob)
{
  alert("Invalid Mobile Number");	
}
else {
    let body = {
		action:"common_register",
      mobile: this.mobile,
      city: this.city,
	  name:this.name
    };

    this.http.post('http://freshkhata.com/fastag_api.php', JSON.stringify(body), {headers: headers})
      
      .subscribe(data => {
     
	  if(data.status=='201')
	  {
		   console.log(data);
		this.navCtrl.push(SelectPage);  
	  }
	  else{
		  alert("User Alerady exit");
	  }
      });
  }
  
}

 next(el) {
    el.setFocus();
  }
 navsdhfcfdbbfbf()
{
this.navCtrl.push(InvoicePage);	
}
  }
  


