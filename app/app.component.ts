import { Component, OnInit } from "@angular/core";
import { StudentDataService } from "./services/student-data.service";
//@ts-ignore
import { Student, Course } from "./models/Student.ts";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [StudentDataService]
})
export class AppComponent implements OnInit {
  constructor(
    private studentDataService: StudentDataService
  ) {}

  /**
   *
   */
  students: Student[] = [];
  courses: Course[] = [];
  ngOnInit() {
    this.studentDataService.getAllStudents().subscribe(students => {
      this.students = students;
    });

    this.studentDataService.getAllCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
}
