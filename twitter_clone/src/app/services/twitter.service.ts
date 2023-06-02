import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TwitterService  {

  constructor(private http:HttpClient) { }
  
  private getuserurl='https://jsonplaceholder.typicode.com/users/1'

  getuser():Observable<any>{
    return this.http.get(`${this.getuserurl}`)
  }

  getuserposts():Observable<any>{
    return this.http.get(`${this.getuserurl}/posts`)
  }
}
