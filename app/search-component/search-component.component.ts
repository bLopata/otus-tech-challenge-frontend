import { Component, OnInit } from "@angular/core";
// @ts-ignore
import { CourseUtilsService } from "../course-utils.service";

@Component({
  selector: "app-search-component",
  templateUrl: "./search-component.component.html",
  styleUrls: ["./search-component.component.css"]
})
export class SearchComponentComponent implements OnInit {
  constructor(private courseUtils: CourseUtilsService) {}

  ngOnInit() {}
  title = "Student Database";
  searchText;
  students: any = this.courseUtils.schoolData.students;
  filteredStudents: any = this.students;
  filterStudents() {
    let tokens = this.searchText.split(" ")
    if (this.searchText == "") {
      this.filteredStudents = this.students;
    } else {
      this.filteredStudents = this.students.filter(s =>
        tokens.every(t => (s.first + s.last).includes(t))
      );
    }
  }
}
