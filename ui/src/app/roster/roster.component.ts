import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { EmailDialogComponent } from '../email-dialog/email-dialog.component';
import { Student } from '../interfaces';
import { State } from '../store';
import { fetchRoster } from '../store/app.actions';
import { getRoster } from '../store/app.selectors';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss'],
  providers: [DialogService, MessageService]
})
export class RosterComponent implements OnInit {
  roster$: Observable<Student[]>;
  emailDialogRef: DynamicDialogRef;
  
  constructor(
    private store: Store<State>,
    private dialogService: DialogService,
    private messageService: MessageService
  ){}

  ngOnInit(){
    this.store.dispatch(fetchRoster());
    this.roster$ = this.store.select(getRoster);
  }

  emailStudent(student){
    this.emailDialogRef = this.dialogService.open(EmailDialogComponent, {
      header: `Send a Message to ${student.firstName} ${student.lastName}`,
      width: '40vw',
      height: '50vh',
      data: {
        student
      }
    });

    this.emailDialogRef.onClose.subscribe(email => {
      if(email){
        this.messageService.add({severity:'success', summary:'Message Sent', detail:`Your message to ${email} was sent successfully`});
      }
    })
  }
}
