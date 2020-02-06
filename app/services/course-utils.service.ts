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

  computeGPA(studentClasses) {
    let sum = studentClasses.map(el => el.grade).reduce((a, b) => a + b),
      gradePointAverage = sum / studentClasses.length;
    return gradePointAverage.toFixed(2);
  }

  listClassesById(studentClasses) {
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

  getStudents(): Observable<Student[]> {
    return of(this.students);
  }

  getStudentById(id: number | string) {
    return this.getStudents().pipe(
      map((students: Student[]) =>
        students.find(student => student.student_id === +id)
      )
    );
  }

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
}
