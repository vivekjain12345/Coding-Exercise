import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import {Observable,throwError} from 'rxjs';
import {map,retry,catchError} from 'rxjs/operators';
import {Company} from '../util/models/company';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
private _selectedCompany:Company|null;

  set selectedCompany(company:any){
    this._selectedCompany = company;
  }
  get selectedCompany(){
    return this._selectedCompany;
  }

  constructor(private http:HttpClient) { }

  public getSearchResults(searchTerm:string) : Observable<Company[]>{
    let url = `https://daas-qa-sig-api.circleback.com/service/contactcloud/companies/autocomplete?company_name=${searchTerm}`;
   return this.http.get(url).pipe(
      retry(1),
      map((data:Company[])=>{return  data ?data['searchResults']:[]}),
      catchError(this.handleError)
    )
  }

  private handleError (error: HttpErrorResponse) {
      // Need to log the error on server for debugging purposes
 if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.log('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    console.log(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened! please check your network connection or try again later.');
    }


}



