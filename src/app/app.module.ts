import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TransactionPage } from '../pages/about/transactions';
import { GoalPage } from '../pages/goal/goal';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import {Tracker} from './Tracker';
import {AuthData} from './AuthData';

@NgModule({
  declarations: [
    MyApp,
    TransactionPage,
    GoalPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TransactionPage,
    GoalPage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Tracker, AuthData]
})
export class AppModule {

}


