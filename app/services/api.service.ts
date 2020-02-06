import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

// @ts-ignore
import { Student } from "../models/Student.ts";

const uri = "http://localhost:4000";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * Method to retrieve all students records via a http get request to the server.
   *
   * @returns An array of Student Observables.
   */
  public getAllStudents(): Observable<Student[]> {
    return this.http
      .get(uri + "/students")
      .toPromise()
      .then(res => res.json() as Student[])
      .map(res => {
        const students = res["students"];
        console.log(`retrieving object ${res}`);
        return students.map(student => new Student(student));
      })
      .catch(this.handleError);
  }

  /**
   * Method to retrieve a single student record via a http get request to the server.
   *
   * @param studentId - The id of the record to retrieve.
   * @returns A single Student Observable.
   */
  public getStudentById(studentId: number): Observable<Student> {
    return this.http
      .get(uri + "/student/" + studentId)
      .map(res => {
        return new Student(res.student);
      })
      .catch(this.handleError);
  }

  /**
   * Method for processing and reporting errors encountered during transfer over http.
   *
   * @param error - The error response returned from the request.
   */
  private handleError(error: Response | any) {
    console.error("ApiService::handleError", error);
    return Observable.throw(error);
  }
}
