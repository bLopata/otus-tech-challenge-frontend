import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CourseUtilsService } from './services/course-utils.service';
import { SearchService } from './services/search.service';
import { FilterPipe } from './pipes/filter.pipe';

const appRoutes: Routes = [
  { path: 'students', component: StudentSearchComponent },
  { path: 'student/:id',      component: StudentDetailsComponent },
  {
    path: 'students',
    component: StudentSearchComponent,
    data: { title: 'Student Database' }
  },
  { path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [  RouterModule.forRoot(
      appRoutes,
    ), BrowserModule, FormsModule ],
  declarations: [ AppComponent, StudentSearchComponent, StudentDetailsComponent, FilterPipe ],
  bootstrap:    [ AppComponent ],
  providers: [CourseUtilsService, SearchService]
})
export class AppModule { }
