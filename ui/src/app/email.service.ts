import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) {}

  sendEmail(email: {
   email: string,
   message: string 
  }){
    return this.http.post('http://localhost:3000/email', email);
  }
}
