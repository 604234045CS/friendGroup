import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Friend } from '../../models/friend.model';


@Injectable()
export class FriendRestProvider {
  private url:string="https://raw.githubusercontent.com/604234045CS/friend/master/daataa.json";

  constructor(public http: HttpClient) {
    console.log('Hello FriendRestProvider Provider');
  }
  getfriendlist():Observable<any>{
    return this.http.get<Friend>(this.url);
  }
  getFriend(studentid:string):Observable<any>{
    return this.http.get<Friend>(this.url);
  }



}
