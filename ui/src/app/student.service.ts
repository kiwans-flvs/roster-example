import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentContact } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentContact(username){
    return this.http.get<StudentContact>(`http://localhost:3000/student/${username}/contact`);
  }
}
