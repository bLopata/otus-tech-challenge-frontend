import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { StudentDataService } from "../../services/student-data.service";
import {CourseUtilsService} from "../../services/course-utils.service"
// @ts-ignore
import { Student } from "../../models/Student.ts";

@Component({
  selector: "app-search-component",
  templateUrl: "./student-search.component.html",
  styleUrls: ["./student-search.component.css"]
})
export class StudentSearchComponent implements OnInit {
  students: Student[];
  searchText;
  title = "Student Database";

  constructor(
    private router: Router,
    private studentDataService: StudentDataService,
    private courseUtils: CourseUtilsService,

  ) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentDataService
      .getAllStudents()
      .subscribe(students => (this.students = students));
  }

  /**
   * Routes to the corresponding /student/:id endpoint to display
   * full details of that student record.
   *
   * @param row - The row number of the selected student.
   */
  navigateTo(row: any) {
    this.router.navigate(["/student/" + row.student_id]);
  }
}
