import { Component, OnInit,OnDestroy } from '@angular/core';
import {SearchService} from '../services/search.service'
import {FormControl,Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith,debounceTime} from 'rxjs/operators';
import {Company} from '../util/models/company';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit,OnDestroy {
  selectedCompany:Company|null;

  constructor(private searchService:SearchService,private routerService:Router) {
    if(!this.searchService.selectedCompany)
        this.routerService.navigate(['/search']);
   }

  ngOnInit() {
    this.selectedCompany = this.searchService.selectedCompany;
  }
  ngOnDestroy(){
    this.searchService.selectedCompany = null;
    this.selectedCompany = null
  }

  back(){
    this.searchService.selectedCompany = '';
    this.routerService.navigate(['/search']);
  }

}
