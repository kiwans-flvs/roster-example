import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppEffects } from './store/app.effects';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './store/app.reducer';
import {TableModule} from 'primeng/table';
import { CardModule } from 'primeng/card';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EmailDialogComponent } from './email-dialog/email-dialog.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { ProfileComponent } from './profile/profile.component';
import { StudentContactComponent } from './student-contact/student-contact.component';
import { RouterModule, Routes } from '@angular/router';
import { RosterComponent } from './roster/roster.component';

const appRoutes: Routes = [
  { path: 'roster', component: RosterComponent },
  { path: 'profile/:username', component: ProfileComponent },
  { path: '', redirectTo: 'roster', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    EmailDialogComponent,
    ProfileComponent,
    StudentContactComponent,
    RosterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({app: appReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([AppEffects]),
    RouterModule.forRoot(
      appRoutes
    ),
    TableModule,
    CardModule,
    ButtonModule,
    DynamicDialogModule,
    InputTextModule,
    InputTextareaModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
