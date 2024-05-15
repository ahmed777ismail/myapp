import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApidataService {
  constructor(private _HttpClient: HttpClient) {}

  getPizzza(): Observable<any> {
    return this._HttpClient.get(
      `https://forkify-api.herokuapp.com/api/search?q=pizza`
    );
  }

  getPasta(): Observable<any> {
    return this._HttpClient.get(
      `https://forkify-api.herokuapp.com/api/search?q=pasta`
    );
  }
}
