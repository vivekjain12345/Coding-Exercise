import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule,MatAutocompleteModule,MatButtonModule} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CompanyInfoComponent } from './company-info/company-info.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CompanyInfoComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,BrowserAnimationsModule,HttpClientModule,FormsModule, ReactiveFormsModule,MatInputModule,
    MatAutocompleteModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
