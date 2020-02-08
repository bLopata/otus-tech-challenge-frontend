import { Injectable } from "@angular/core";
import schoolData from "../schoolData.json";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";
import { map } from "rxjs/operators";
// @ts-ignore
import { Student } from "../models/Student.ts";

@Injectable({
  providedIn: "root"
})
export class CourseUtilsService {
  constructor() {}

  public schoolData = schoolData;

  public students: Student[] = schoolData.students.map(s => new Student(s));

  /**
   * Method to compute the numerical grade point average based on the enrolled courses.
   *
   * @param studentClasses - Input array of courses, each containing a numerical `grade` property.
   * @returns A string representation of the cumulative GPA in fixed floating-point notation.
   */
  computeGPA(studentClasses): String {
    let sum = studentClasses.map(el => el.grade).reduce((a, b) => a + b),
      gradePointAverage = sum / studentClasses.length;
    return gradePointAverage.toFixed(2);
  }

  /**
   * Returns the report card for a student mapping the numerical grade and course id
   * to a letter grade and course name.
   *
   * @param studentClasses - The array of objects containing the students numerical grade
   * and course id.
   *
   * @returns A string which has the letter grade and course name for each enrolled course.
   */
  listClassesById(studentClasses): String {
    let letterGrades = {
      4: "A",
      3.5: "A-",
      3: "B",
      2.5: "B-",
      2: "C",
      1.5: "C-",
      1: "D",
      0.5: "D-",
      0: "F"
    };
    let grades = studentClasses
      .map(c => c["grade"])
      .map(num => letterGrades[num]);
    let courseNames = studentClasses.map(el => schoolData.classes[el.id]);
    return [courseNames, grades]
      .reduce((a, b) => b.map((v, i) => v + " - " + a[i]))
      .join("\r\n");
  }

  /** Method to retrieve all student records from the server.
   *
   * @remarks Exposes the methods for transferring data from the server to the app component.
   *
   * @returns An array of Student Observables.
   */
  getStudents(): Observable<Student[]> {
    return of(this.students);
  }

  /**
   * Method to return a single student record from the server.
   *
   * @remarks Exposes the methods for transferring data from the server to the app component.
   *
   * @param studentId - Record index to retrieve.
   * @returns A single Student Observable.
   */
  getStudentById(id: number | string) {
    return this.getStudents().pipe(
      map((students: Student[]) =>
        students.find(student => student.student_id === +id)
      )
    );
  }

  addId() : Function {
    return ((s, i) => Object.assign(s, { student_id: i+1 }));
  }
}
