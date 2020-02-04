import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { CourseUtilsService } from './services/course-utils.service';
import { SearchService } from './services/search.service';

const appRoutes: Routes = [
  { path: 'students', component: StudentSearchComponent },
  { path: 'student/:id',      component: DetailsComponentComponent },
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
      { enableTracing: true } // <-- debugging purposes only
    ), BrowserModule, FormsModule ],
  declarations: [ AppComponent, StudentSearchComponent, DetailsComponentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CourseUtilsService, SearchService]
})
export class AppModule { }
