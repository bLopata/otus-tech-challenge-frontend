import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router' ;
// @ts-ignore
import { Student } from '../../models/Student.ts'
//@ts-ignore
import { CourseUtilsService } from "../../services/course-utils.service.ts";

@Component({
  selector: "app-search-component",
  templateUrl: "./student-search.component.html",
  styleUrls: ["./student-search.component.css"]
})
export class StudentSearchComponent implements OnInit {
  constructor(
    private courseUtils: CourseUtilsService, 
    private router: Router
  ){ }

  ngOnInit() {}
  
/**
 * Routes to the corresponding /student/:id endpoint to display 
 * full details of that student record.
 * 
 * @param row - The row number of the selected student.
 */
  navigateTo(row: any) {
    this.router.navigate(['/student/'+row.student_id]);
  } 

  title = "Student Database";
  searchText;
  students: any = this.courseUtils.students;
}
