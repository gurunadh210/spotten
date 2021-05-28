import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { SubjectComponent } from './subject/subject.component';
import { StudentComponent } from './student/student.component';
import { LecturerService } from './lecturer/lecturer.service';
import { SubjectService } from './subject/subject.service';
import { routing } from './app.route';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student/student.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LecturerComponent,
    SubjectComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    routing
  ],
  providers: [SubjectService, LecturerService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
