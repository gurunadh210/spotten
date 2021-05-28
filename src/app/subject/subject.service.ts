import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Subject } from './subject';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn: 'root'
})
export class SubjectService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }


    public getSubjects(): Observable<Subject[]> {

        return this.http.get<Subject[]>(`${this.apiServerUrl}/subject/all`);

    }

    public getLecturers(): Observable<any[]> {

        return this.http.get<any[]>(`${this.apiServerUrl}/lecturer/all`);

    }


    public addSubject(subject: Subject): Observable<Subject> {

        return this.http.post<Subject>(`${this.apiServerUrl}/subject/add`, subject);

    }


    public updateSubject(subject: Subject): Observable<Subject> {

        return this.http.put<Subject>(`${this.apiServerUrl}/subject/update`, subject);

    }

    public deleteSubject(subjectId: number): Observable<void> {

        return this.http.delete<void>(`${this.apiServerUrl}/subject/delete/${subjectId}`);

    }



}

