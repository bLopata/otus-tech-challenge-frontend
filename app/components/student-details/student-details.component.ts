import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
// @ts-ignore
import { CourseUtilsService } from "../../services/course-utils.service";
// @ts-ignore
import { Student } from "../../models/Student.ts";

@Component({
  selector: "app-details-component",
  templateUrl: "./student-details.component.html",
  styleUrls: ["./student-details.component.css"]
})
export class StudentDetailsComponent implements OnInit {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseUtils: CourseUtilsService
  ) {}
  /**
   * Creates an Observable for the `student` object, and gets
   * details for that student ID based on the `/:id` paramater 
   * in the URL.
   */
  student$: Observable<Student>;
  ngOnInit() {
    this.student$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.courseUtils.getStudentById(params.get("id"))
      )
    );
  }
  title = "Student Details";

  gotoStudents() {
    this.router.navigate(["/students"]);
  }
}
