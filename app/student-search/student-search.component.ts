import { Component, OnInit } from "@angular/core";
import { CourseUtilsService } from "../services/course-utils.service";
//@ts-ignore
import { SearchService } from '../services/search.service.ts';
// @ts-ignore
import { Searchable } from '../models/Searchable.ts'

@Component({
  selector: "app-search-component",
  templateUrl: "./student-search.component.html",
  styleUrls: ["./student-search.component.css"]
})
export class StudentSearchComponent implements OnInit {
  filteredStudents: Searchable[] =[]
  constructor(
    private courseUtils: CourseUtilsService, 
    private search: SearchService 

  ){ }

  ngOnInit() {
    this.search.load(this.courseUtils.students)
    this.courseUtils.students.forEach(this.courseUtils.addId(1))
  }

  title = "Student Database";
  searchText;
  students: any = this.courseUtils.students;
}
