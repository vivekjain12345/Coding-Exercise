import { Component, OnInit,OnDestroy } from '@angular/core';
import {SearchService} from '../services/search.service'
import {FormControl,Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith,debounceTime,catchError} from 'rxjs/operators';
import {Company} from '../util/models/company';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit,OnDestroy {
  companyCtrl = new FormControl('',Validators.required);
  serviceErrorMsg:string;
  showCompanyError:boolean = false;
  filteredResults:Company[] = [];

  constructor(private searchService :SearchService,private routerService:Router) { 
  }
  ngOnInit() {
    this.searchService.selectedCompany = null;
    this.companyCtrl.valueChanges.pipe(debounceTime(200)).subscribe(searchTerm => this.autoSearch(searchTerm));
    this.companyCtrl.markAsUntouched;
  }

  ngOnDestroy(){
    this.filteredResults =[];
  }

  autoSearch(searchTerm:string){
    if(searchTerm.length > 2){
    this.searchService.getSearchResults(searchTerm).subscribe((data:Company[])=>{
      if(data && data.length > 0){
      this.filteredResults = data;
      this.showCompanyError = false;
    }
    else {
      this.showCompanyError = true;
      this.filteredResults= [];
    }
    this.serviceErrorMsg = '';
      //this.options = data;
    },
    error=>{
      this.serviceErrorMsg = error;
      this.filteredResults = [];
      this.showCompanyError = false;
    })
  }
  else{
      this.filteredResults= [];
    }
  }

  han
  
  displayFn(company?: Company): string | undefined {
    return company ? company.companyName : undefined;
  }
  onSubmit(){
    let selectedValue:Company = this.companyCtrl.value;
    if(selectedValue && selectedValue.companyName){
      this.searchService.selectedCompany = selectedValue;
      this.routerService.navigate(['./company']);
      this.showCompanyError = false;
    }else{
      this.showCompanyError = true;
    }
  }


}
