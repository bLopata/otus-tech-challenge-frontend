import { Component, OnInit } from '@angular/core';
import schoolData from '../schoolData.json';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Student Database';
  searchText;
  students: any = schoolData.students;

  // Iterates over all enrolled classes for the student and calculates their cumulative GPA.
  computeGPA(studentClasses){
    let sum = studentClasses
    .map(el => el.grade)
    .reduce((a,b) => {return a + b}),
    gradePointAverage = sum/studentClasses.length
    return gradePointAverage.toFixed(2)
}

}