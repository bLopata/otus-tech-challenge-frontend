import { Component, OnInit } from '@angular/core';
// @ts-ignore
import CourseUtilsService from '../course-utils.service'

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Student Database';
  searchText;
  students: any = CourseUtilsService.schoolData.students;

}