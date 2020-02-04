import { Component, OnInit } from "@angular/core";
// @ts-ignore
import { CourseUtilsService } from "../services/course-utils.service";
//@ts-ignore
import { SearchService } from '../services/search.service.ts';

@Component({
  selector: "app-search-component",
  templateUrl: "./search-component.component.html",
  styleUrls: ["./search-component.component.css"]
})
export class StudentSearchComponent implements OnInit {
  constructor(
    private courseUtils: CourseUtilsService, 
    public search: SearchService) {}

  ngOnInit() {
    this.search.load(this.courseUtils.students)
    this.courseUtils.students.forEach(this.courseUtils.addId(1))
  }
  
  title = "Student Database";
  searchText;
  students: any = this.courseUtils.students;
}
