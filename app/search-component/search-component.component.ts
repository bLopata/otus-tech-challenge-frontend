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
export class SearchComponentComponent implements OnInit {
  constructor(
    private courseUtils: CourseUtilsService, 
    private search: SearchService) {}

  ngOnInit() {
    this.search.load(this.courseUtils.students)
  }
  title = "Student Database";
  searchText;
  students: any = this.courseUtils.students;
}
