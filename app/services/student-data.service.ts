import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from './api.service'

// @ts-ignore
import { Student } from "../models/Student.ts";

@Injectable()
export class StudentDataService {

  constructor(private api: ApiService) { }

  getAllStudents(): Observable<Student[]>{
    return this.api.getAllStudents()
  }

  getStudentById(studentId: number): Observable<Student>{
    return this.api.getStudentById(studentId)
  }

}