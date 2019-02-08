import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FriendRestProvider } from '../../providers/friend-rest/friend-rest';
import { Friend } from '../../models/friend.model';
import { FriendDetailPage } from '../friend-detail/friend-detail';



@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
})
export class FriendListPage {
  friends:Friend;
  category:string;

  constructor(public friendRest:FriendRestProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.category=this.navParams.get("category")
    this.friendRest.getfriendlist().subscribe(data=>{
      this.friends=data.filter(friend=>friend.category === this.category)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendListPage');
  }
  goBack(){
    this.navCtrl.pop();
  }
  showDetail(studentid:number){
    this.navCtrl.push(FriendDetailPage,
      {studentid:studentid}
      );
  }

}
