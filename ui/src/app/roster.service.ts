import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Student } from './interfaces';

@Injectable({
  providedIn: 'root'
})

export class RosterService {

  constructor(private http: HttpClient) { }

  getRoster() {
    return this.http.get<Student[]>('http://localhost:3000/roster');
  }
}
