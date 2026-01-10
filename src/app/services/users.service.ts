import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsersProfile(){
    return this.http.get('https://api.github.com/users/shreeramk')
  }
    getUsersReposDetails(): Observable<any> {
    return this.http.get("https://api.github.com/users/shreeramk/repos");
  }
}
