import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ApiService } from "./api.service";
// @ts-ignore
import { Student } from "../models/Student.ts";

@Injectable()
export class StudentDataService {
  constructor(private api: ApiService) {}

  /**
   * Method to retrieve all student records from the server.
   *
   * @remarks Exposes the methods for transferring data from the server to the app component.
   *
   * @returns An array of Student Observables.
   */
  getAllStudents(): Observable<Student[]> {
    return this.api.getAllStudents();
  }

  /**
   * Method to return a single student record from the server.
   *
   * @remarks Exposes the methods for transferring data from the server to the app component.
   *
   * @param studentId - Record index to retrieve.
   * @returns A single Student Observable.
   */
  getStudentById(studentId: number): Observable<Student> {
    return this.api.getStudentById(studentId);
  }
}
