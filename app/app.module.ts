import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { CourseUtilsService } from './course-utils.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SearchComponentComponent, DetailsComponentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CourseUtilsService]
})
export class AppModule { }
