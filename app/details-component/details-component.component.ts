import { Component, OnInit } from '@angular/core';
// @ts-ignore
import CourseUtilsService from '../course-utils.service'

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

  students: any = CourseUtilsService.schoolData.students;

  classes: any = CourseUtilsService.schoolData.classes;


  
}