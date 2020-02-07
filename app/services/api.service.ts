import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { map, tap } from "rxjs/operators"
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
// @ts-ignore
import { Student, Course } from "../models/Student.ts";

@Injectable()
export class ApiService {
  private uri = "http://localhost:4000";
  constructor(private http: HttpClient) {}

  /**
   * Method to retrieve all students records via a http get request to the server.
   *
   * @returns An array of Student Observables.
   */
  public getAllStudents (): Observable<Student[]> {
    console.log(`retrieving students`)
    return this.http
      .get(this.uri + "/students")
      .toPromise()
      .then(res => res.json().data as Student[])
  }

  public getAllCourses(): Observable<Course[]> {
    return this.http
    .get<Course[]>(this.uri + "/courses")
    .pipe(
      tap(courses => console.log(`retrieved courses`)),
      this.handleError
    );
  }

  /**
   * Method to retrieve a single student record via a http get request to the server.
   *
   * @param studentId - The id of the record to retrieve.
   * @returns A single Student Observable.
   */
  public getStudentById(id: number): Observable<Student> {
    return this.http
      .get<Student>(this.uri + "/student/" + id)
      .pipe(
        map(students => students[0]),
        tap(h => {
          const outcome = h ? `retrieved` : `could not find`;
          console.log(`${outcome} student id=${id}`);
        })
        )
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
