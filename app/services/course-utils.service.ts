import { Injectable } from "@angular/core";
import schoolData from "../schoolData.json";
import { Observable } from "rxjs";
import { of } from "rxjs/observable/of";
import { map } from "rxjs/operators";
import { HttpClientModule } from "@angular/common/http";
// @ts-ignore
import { Student } from "../models/Student.ts";

@Injectable()
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
   * Method to add an id parameter for each student record.
   *
   * @param id - The start index from which to increment.
   */
  addId(id) {
    return function iter(o) {
      if ("first" in o) {
        o.student_id = id++;
      }
      Object.keys(o).forEach(function(k) {
        Array.isArray(o[k]) && o[k].forEach(iter);
      });
    };
  }

  /**
   * Method to fetch the students from the input data.
   *
   * @returns An array of Student objects converted to Observables.
   */
  getStudents(): Observable<Student[]> {
    return of(this.students);
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

  /**
   * Method to fetch a single Student instance based on id.
   *
   * @param id - The student id corresponding to the record number.
   */
  getStudentById(id: number | string): Student {
    return this.getStudents().pipe(
      map((students: Student[]) =>
        students.find(student => student.student_id === +id)
      )
    );
  }
}
