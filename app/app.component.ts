import { Component, OnInit } from "@angular/core";
import { CourseUtilsService } from "./services/course-utils.service";
import { StudentDataService } from "./services/student-data.service";
//@ts-ignore
import { Student } from "./models/Student.ts";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [StudentDataService, CourseUtilsService]
})
export class AppComponent implements OnInit {
  constructor(
    private courseUtils: CourseUtilsService,
    private studentDataService: StudentDataService
  ) {}

  /**
   * Initializes the database records and appends the id parameter
   * to each student record when the webpage is loaded.
   */
  students: Student[] = [];
  ngOnInit() {
    this.courseUtils.students.forEach(this.courseUtils.addId(1));
    this.studentDataService
    .getAllStudents()
    .subscribe(students => {
      this.students = students;
    })
    .then((students: Student[]) => {
      this.students = students.map(student => {
        if(!student.student_id) {
          students.forEach(this.courseUtils.addId(1))
        }
        return student
      })
    });
  }
}
