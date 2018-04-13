import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { FastagregisterPage } from '../pages/fastagregister/fastagregister';
import { SelectPage } from '../pages/select/select';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InvoicePage } from '../pages/invoice/invoice';
import { SuceessPage } from '../pages/suceess/suceess';
import { RechargeinfoPage } from '../pages/rechargeinfo/rechargeinfo';
import { BankPage } from '../pages/bank/bank';
import { SucPage } from '../pages/suc/suc';
import { LoginPage } from '../pages/login/login';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/Rx';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
	SelectPage,
   FastagregisterPage,
   RechargeinfoPage,
   InvoicePage,
   SuceessPage,
   BankPage,
   SucPage,
   LoginPage
   
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    IonicModule.forRoot(MyApp),
	
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
	SelectPage,
	FastagregisterPage,
	RechargeinfoPage,
	InvoicePage,
	SuceessPage,
	BankPage,
	SucPage,
	LoginPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
