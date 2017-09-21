import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StudentComponent } from './student.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DbService} from './db/db.service';
import { StudentProfileComponent } from './student-profile.component';

const MY_ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'student', component: StudentComponent},
  {path: 'student/studentProfile/:id', component: StudentProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HomeComponent,
    StudentProfileComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
