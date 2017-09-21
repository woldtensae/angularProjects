import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StudentComponent } from './student.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DbService} from './db/db.service';
import { StudentProfileComponent } from './student-profile.component';
import { MyGuardService } from './my-guard.service';
import { ErrorComponent } from './error/error.component'

const MY_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'student', component: StudentComponent},
  {path: 'student/studentProfile/:id', component: StudentProfileComponent, canActivate:[MyGuardService]}


]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HomeComponent,
    StudentProfileComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(MY_ROUTES), 
  ],
  providers: [DbService, MyGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
