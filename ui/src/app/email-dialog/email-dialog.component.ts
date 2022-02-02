import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { tap } from 'rxjs/operators';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-dialog',
  templateUrl: './email-dialog.component.html',
  styleUrls: ['./email-dialog.component.scss']
})
export class EmailDialogComponent implements OnInit {

  student: any;
  emailForm: FormGroup;

  constructor(
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private fb: FormBuilder,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.student = this.config.data.student;

    this.emailForm = this.fb.group({
      email: [`${this.student.username}@flvs.net`,{
        disabled: true
      }],
      message: ['', Validators.required]
    })
  }

  sendMessage(){
    if(this.emailForm.valid){
      this.emailService.sendEmail(this.emailForm.value).subscribe(res => {
        if(res){
          this.ref.close(this.emailForm.value.email);
        }
      })
    }
  }
}
