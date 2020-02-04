import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router' ;
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// @ts-ignore
import { Student } from '../../models/Student.ts'
//@ts-ignore
import { CourseUtilsService } from "../../services/course-utils.service.ts";
//@ts-ignore
import { SearchService } from '../../services/search.service.ts';
// @ts-ignore
import { Searchable } from '../../models/Searchable.ts'

@Component({
  selector: "app-search-component",
  templateUrl: "./student-search.component.html",
  styleUrls: ["./student-search.component.css"]
})
export class StudentSearchComponent implements OnInit {
  students$: Observable<Student[]>;
  selectedId: number;
  constructor(
    private courseUtils: CourseUtilsService, 
    private search: SearchService ,
    private router: Router
  ){ }

  ngOnInit() {
    this.search.load(this.courseUtils.students)
    this.courseUtils.students.forEach(this.courseUtils.addId(1))
  }

  navigateTo(row: any) {
    this.router.navigate(['/student/'+row.student_id]);
  } 

  title = "Student Database";
  searchText;
  students: any = this.courseUtils.students;
}
