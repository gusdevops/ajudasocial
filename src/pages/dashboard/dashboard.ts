import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


/**
 * Generated class for the DashboardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  items: FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private db: AngularFireDatabase) {

          this.items =  this.db.list("/anything", {preserveSnapshot: true});
          this.items.subscribe(x => console.log('Subscriber 1: ', x));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }




  public getList() {
      this.items.push({"issoai":"1"});

  }

}
