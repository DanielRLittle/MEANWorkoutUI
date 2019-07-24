import { Injectable } from '@angular/core';
import { DataRequestService } from './data-request.service';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/user/interfaces/Iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private req: DataRequestService) { }

  createUser<Iuser>(user: Iuser): Observable<Iuser> {
    return this.req.post<Iuser>(this.req.url+'/user/create', user);
  }

  getAllUsers(): Observable<Iuser> {
    return this.req.get<Iuser>(this.req.url+'/user/all');
  }

  getOneUser(username: Iuser): Observable<Iuser> {
    let urlString = this.req.url+'/user/getUsername?username=' + username.username;
    return this.req.get<Iuser>(urlString);
  }

}
