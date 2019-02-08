import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Friend } from '../../models/friend.model';
import { FriendRestProvider } from '../../providers/friend-rest/friend-rest';


@Component({
  selector: 'page-friend-detail',
  templateUrl: 'friend-detail.html',
})
export class FriendDetailPage {
  studentid:number;
  friend:Friend;

  constructor(private friendRest:FriendRestProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.studentid=this.navParams.get("studentid");
    this.friendRest.getfriendlist().subscribe(data=>{
      this.friend=data.filter(friend=>friend.studentid === this.studentid)[0];
    })
  }
  ionViewDidLoad() {
    this.studentid=this.navParams.get("studentid");
    console.log(this.studentid);
  }
  goBack(){
    this.navCtrl.pop();
  }

}
