import { Routes, RouterModule } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { HeaderComponent } from './header/header.component';
import { LecturerComponent } from './lecturer/lecturer.component';
import { StudentComponent } from './student/student.component';


const appRoutes: Routes = [
    { path: 'subject', component: SubjectComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'lecturer', component: LecturerComponent },
    { path: 'student', component: StudentComponent }
];

export const routing = RouterModule.forRoot(appRoutes);