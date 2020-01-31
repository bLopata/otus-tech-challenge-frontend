import { Component, OnInit } from '@angular/core';
import schoolData from '../schoolData.json';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = "Student Details";

  searchText;

  students: any = schoolData.students;

  classes: any = schoolData.classes;

  listClassesById(studentClasses){
    let classes = studentClasses.map(el => schoolData.classes[el.id])
    return classes
  };
  
}