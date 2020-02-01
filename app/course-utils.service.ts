import { Injectable } from '@angular/core';
import schoolData from './schoolData.json';

@Injectable({
  providedIn: 'root'
})

export class CourseUtilsService {

  constructor() { }

  public schoolData = schoolData;

  // Iterates over all enrolled classes for the student and calculates their cumulative GPA.
  computeGPA(studentClasses){
    let sum = studentClasses
    .map(el => el.grade)
    .reduce((a,b) => a + b),
    gradePointAverage = sum/studentClasses.length
    return gradePointAverage.toFixed(2)
};

  listClassesById(studentClasses){
    return studentClasses.map(el => schoolData.classes[el.id])
  };
}