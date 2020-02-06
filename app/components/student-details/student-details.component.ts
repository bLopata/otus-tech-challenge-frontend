import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
// @ts-ignore
import { ApiService } from "../../services/api.service";
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
    private api: ApiService
  ) {}
  /**
   * Creates an Observable for the `Student` object, and gets details for that 
   * student based on the `/:id` paramater in the URL.
   */
  student$: Observable<Student>;
  ngOnInit() {
    this.student$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.api.getStudentById(params.get("id"))
        .subscribe(student => {
      this.student$ = student;
    })
      )
    );
  }

  title = "Student Details";

  /**
   * Routes back to the main page.
   */
  gotoStudents() {
    this.router.navigate(["/students"]);
  }
}
