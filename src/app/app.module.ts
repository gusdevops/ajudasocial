import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DashboardPage } from '../pages/dashboard/dashboard';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//Angular firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireModule } from 'angularfire2';
// import { environment } from '../environment/environment';
import { LocationProvider } from '../providers/location/location';
import { LoginProvider } from '../providers/login/login';
import { ServiceProvider } from '../providers/service/service';
import { ServiceHelperProvider } from '../providers/service-helper/service-helper';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAuDUngJpxMkLCVBNLTfw1vVowDSnT_e5U",
    authDomain: "ajuda-fd991.firebaseapp.com",
    databaseURL: "https://ajuda-fd991.firebaseio.com",
    projectId: "ajuda-fd991",
    storageBucket: "ajuda-fd991.appspot.com",
    messagingSenderId: "579700721779"
  }
};



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DashboardPage
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp, MyApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabaseModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocationProvider,
    LoginProvider,
    ServiceProvider,
    ServiceHelperProvider
  ]
})
export class AppModule {}
