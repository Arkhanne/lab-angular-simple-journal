import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  private baseURL = 'http://localhost:3000/api';


  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get(`${this.baseURL}/journal-entries`).toPromise();
  }

}
