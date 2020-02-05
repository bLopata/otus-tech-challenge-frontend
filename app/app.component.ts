import { Component, OnInit } from "@angular/core";
import { CourseUtilsService } from "./services/course-utils.service";
import { StudentDataService } from "./services/student-data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [StudentDataService]
})
export class AppComponent implements OnInit {
  constructor(
    private courseUtils: CourseUtilsService,
    private studentDataService: StudentDataService
  ) {}
  ngOnInit() {
    this.courseUtils.students.forEach(this.courseUtils.addId(1));
  }

  get students() {
    return this.studentDataService.getAllStudents();
  }
}
