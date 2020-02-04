import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router' ;
import { switchMap } from 'rxjs/operators';
// @ts-ignore
import { CourseUtilsService } from '../../services/course-utils.service';


@Component({
  selector: 'app-details-component',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  constructor(  private route: ActivatedRoute,
  private router: Router,
  private courseUtils: CourseUtilsService) { 
  
  }
  

  ngOnInit() {  
    let id = this.route.snapshot.paramMap.get('id');

    this.students = this.courseUtils.getHero(id);
  }
  title = "Student Details";

  searchText;

  students: any = this.courseUtils.schoolData.students;

  classes: any = this.courseUtils.schoolData.classes;

  gotoStudents() {
    this.router.navigate(['/students']);
}
  
}