import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataRequestService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:8080";
  
  post<T>(url: string, body: T): Observable<T> {
    return this.http.post<T>(url, body);
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}