import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserformComponent} from "./userform/userform.component";

@Injectable({
  providedIn: 'root'
})
export class UserformService{
  userForm: any;

  constructor(private http: HttpClient) { }
  getUser(body: any): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  onSaveUser(body:any):Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/users', body);
  }
}
