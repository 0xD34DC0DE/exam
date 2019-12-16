import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mock } from '../models/mock';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  createMock() :Observable<Mock> {
    return this.http.post<Mock>("/rest/mock/add", new Mock("123@gmail.com", "Hehe"));
  }
}
