import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { DetailsComponentComponent } from './details-component/details-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng2SearchPipeModule ],
  declarations: [ AppComponent, SearchComponentComponent, DetailsComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
