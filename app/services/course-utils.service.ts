import { Injectable } from "@angular/core";
import schoolData from "../schoolData.json";
import { Observable } from "rxjs";
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

  computeGPA(studentClasses) {
    let sum = studentClasses.map(el => el.grade).reduce((a, b) => a + b),
      gradePointAverage = sum / studentClasses.length;
    return gradePointAverage.toFixed(2);
  }

  listClassesById(studentClasses) {
    return studentClasses.map(el => schoolData.classes[el.id]);
  }

  getStudentById(id: number | string) {
    console.log(`searching ${this.students} for ${id}`);
    let ids = this.students.forEach(this.addId(1));
    console.log(ids);
  };

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
