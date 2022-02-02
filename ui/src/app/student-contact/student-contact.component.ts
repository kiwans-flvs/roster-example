import { Component, Input, OnInit } from '@angular/core';
import { StudentContact } from '../interfaces';

@Component({
  selector: 'app-student-contact',
  templateUrl: './student-contact.component.html',
  styleUrls: ['./student-contact.component.scss']
})
export class StudentContactComponent implements OnInit {

  @Input()
  contact: StudentContact;

  constructor() { }

  ngOnInit(): void {
  }

}
