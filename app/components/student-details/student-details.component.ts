import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { CourseUtilsService } from '../../services/course-utils.service';


@Component({
  selector: 'app-details-component',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(private courseUtils: CourseUtilsService) { 
  
  }
  

  ngOnInit() {
  }
  title = "Student Details";

  searchText;

  students: any = this.courseUtils.schoolData.students;

  classes: any = this.courseUtils.schoolData.classes;
  
}