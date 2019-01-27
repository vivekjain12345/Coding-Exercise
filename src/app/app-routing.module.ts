import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {CompanyInfoComponent} from './company-info/company-info.component';

const routes: Routes = [ 
  {path: 'search',component: SearchComponent},
  {path:'company', component:CompanyInfoComponent},
  {path: '',redirectTo:'search',pathMatch:'full'},
  {path: '**',redirectTo:'search'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
