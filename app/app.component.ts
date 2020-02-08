import { Component, OnInit } from "@angular/core";
import { CourseUtilsService } from "./services/course-utils.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  students = this.courseUtils.students
  constructor(private courseUtils: CourseUtilsService) {}
  ngOnInit() {
    this.students.map(this.courseUtils.addId());
  }
}
