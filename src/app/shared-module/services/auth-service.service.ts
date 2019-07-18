import { Injectable } from '@angular/core';
import { DataRequestService } from './data-request.service';
import { Observable } from 'rxjs';
import { Iuser } from 'src/app/user/interfaces/Iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private req: DataRequestService) { }

  url: string = "localhost:8080";

  createUser<Iuser>(user: Iuser): Observable<Iuser> {
    return this.req.post<Iuser>(this.url+'/user/create', user);
  }

}
