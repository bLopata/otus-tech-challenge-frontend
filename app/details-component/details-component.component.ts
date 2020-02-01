import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { CourseUtilsService } from '../services/course-utils.service';

@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent implements OnInit {

  constructor(private courseUtils: CourseUtilsService) { 
  
  }
  

  ngOnInit() {
  }
  title = "Student Details";

  searchText;

  students: any = this.courseUtils.schoolData.students;

  classes: any = this.courseUtils.schoolData.classes;
  
}