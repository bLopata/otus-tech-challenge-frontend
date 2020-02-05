import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

// @ts-ignore
import { Student } from "../models/Student.ts";

const API_URL = "https://otus-tech-challenge.stackblitz.io/";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public getAllStudents(): Observable<Student[]> {
    return this.http
      .get(API_URL + "/students")
      .map(res => {
        const students = res["students"];
        console.log(`retrieving object ${res}`);
        return students.map(student => new Student(student));
      })
      .catch(this.handleError);
  }

  public getStudentById(studentId: number): Observable<Student> {
    return this.http
      .get(API_URL + "/student" + studentId)
      .map(res => {
        return new Student(res.json());
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error("ApiService::handleError", error);
    return Observable.throw(error);
  }
}
