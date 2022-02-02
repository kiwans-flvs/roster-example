import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, take, tap } from 'rxjs';
import { Student, StudentContact } from '../interfaces';
import { State } from '../store';
import { fetchRoster, fetchStudentContact } from '../store/app.actions';
import { getRoster, getStudent, getStudentContact } from '../store/app.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  student$: Observable<Student>;
  contact$: Observable<StudentContact>;
  
  constructor(
    private store: Store<State>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fetchRoster());
    this.store.dispatch(fetchStudentContact({username: this.route.snapshot.paramMap.get('username')}));

    this.student$ = this.store.select(getStudent(this.route.snapshot.paramMap.get('username')));
    this.contact$ = this.store.select(getStudentContact(this.route.snapshot.paramMap.get('username')));
  }

}
