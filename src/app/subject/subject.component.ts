import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lecturer } from './subject';
import { Subject } from './subject';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  [x: string]: any;


  public subjects: Subject[];
  public editSubject: Subject;
  public deleteSubject: Subject;
  public lectures: any;


  constructor(private subjectService: SubjectService
  ) { }


  ngOnInit() {
    this.getSubjects();
    this.getLecturers();

  }



  public getLecturers(): void {
    this.subjectService.getLecturers().subscribe(
      (response: Lecturer[]) => {
        this.lecturers = response;
        console.log(this.lecturers);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getSubjects(): void {
    this.subjectService.getSubjects().subscribe(
      (response: Subject[]) => {
        this.subjects = response;
        console.log(this.subjects);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddSubject(addForm: NgForm): void {
    document.getElementById('add-subject-form').click();
    this.subjectService.addSubject(addForm.value).subscribe(
      (response: Subject) => {
        console.log(response);
        this.getSubjects();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateSubject(subject: Subject): void {
    this.subjectService.updateSubject(subject).subscribe(
      (response: Subject) => {
        console.log(response);
        this.getSubjects();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteSubject(subjectId: number): void {
    this.subjectService.deleteSubject(subjectId).subscribe(
      (response: void) => {
        console.log(response);
        this.getSubjects();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  public onOpenModal(subject: Subject, mode: string): void {

    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSubjectModal');
    }
    if (mode === 'edit') {
      this.editSubject = subject;
      button.setAttribute('data-target', '#updateSubjectModal');
    }
    if (mode === 'delete') {
      this.deleteSubject = subject;
      button.setAttribute('data-target', '#deleteSubjectModal');
    }

    container.appendChild(button);
    button.click();
  }
}
