import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lecturer } from './lecturer';
import { LecturerService } from './lecturer.service';

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {

  public lecturers: Lecturer[];
  public editLecturer: Lecturer;
  public deleteLecturer: Lecturer;

  constructor(
    private lecturerService: LecturerService) { }


  ngOnInit() {

    this.getLecturers();
  }


  public getLecturers(): void {
    this.lecturerService.getLecturers().subscribe(
      (response: Lecturer[]) => {
        this.lecturers = response;
        console.log(this.lecturers);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddLecturer(addForm: NgForm): void {
    document.getElementById('add-lecturer-form').click();
    this.lecturerService.addLecturer(addForm.value).subscribe(
      (response: Lecturer) => {
        console.log(response);
        this.getLecturers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateLecturer(lecturer: Lecturer): void {
    this.lecturerService.updateLecturer(lecturer).subscribe(
      (response: Lecturer) => {
        console.log(response);
        this.getLecturers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteLecturer(lecturerId: number): void {
    this.lecturerService.deleteLecturer(lecturerId).subscribe(
      (response: void) => {
        console.log(response);
        this.getLecturers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }




  public onOpenModal(lecturer: Lecturer, mode: string): void {

    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addLecturerModal');
    }
    if (mode === 'edit') {
      this.editLecturer = lecturer;
      button.setAttribute('data-target', '#updateLecturerModal');
    }
    if (mode === 'delete') {
      this.deleteLecturer = lecturer;
      button.setAttribute('data-target', '#deleteLecturerModal');
    }

    container.appendChild(button);
    button.click();
  }


}





