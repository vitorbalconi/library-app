import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Writers } from './writers';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private _url:string = 'http://localhost:3000/autores'

  constructor(private http: HttpClient) {
  };

  getWriters(): Observable<Writers[]> {
    return this.http.get<Writers[]>(this._url);
  }

  postWriters(postData) {
    return this.http.post(this._url, postData);
  }
}
  
