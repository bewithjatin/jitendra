import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectPage } from '../select/select';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public http: HttpClient ) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectPage');
	
  }
navsdhfc()
{
	this.navCtrl.push(SelectPage);
}
register() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
var mobile11=this.mobile;
if(mobile11.length == 10)
{
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
  else
  {
	  alert("Invalid Mobile Number");
  }
}
}
