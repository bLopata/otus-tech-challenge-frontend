import { Component, OnInit } from "@angular/core";
import { CourseUtilsService } from "./services/course-utils.service";
import { StudentDataService } from "./services/student-data.service";
//@ts-ignore
import { Student } from "./models/Student.ts"

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [StudentDataService, CourseUtilsService]
})
export class AppComponent implements OnInit {
  students: Student[] = [];
  constructor(
    private courseUtils: CourseUtilsService,
    private studentDataService: StudentDataService
  ) {}
  ngOnInit() {
    this.courseUtils.students.forEach(this.courseUtils.addId(1));
    this.studentDataService.getAllStudents()
    .subscribe(
      students => {
        this.students = students
      }
    )
  }
}
