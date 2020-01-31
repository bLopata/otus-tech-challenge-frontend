import { Injectable } from '@angular/core';
import schoolData from './schoolData.json';

@Injectable()
export class CourseUtilsService {

  constructor() { }
  schoolData;
  // Iterates over all enrolled classes for the student and calculates their cumulative GPA.
  computeGPA(studentClasses){
    let sum = studentClasses
    .map(el => el.grade)
    .reduce((a,b) => {return a + b}),
    gradePointAverage = sum/studentClasses.length
    return gradePointAverage.toFixed(2)
};

  listClassesById(studentClasses){
    let classes = studentClasses.map(el => schoolData.classes[el.id])
    return classes
  };
}