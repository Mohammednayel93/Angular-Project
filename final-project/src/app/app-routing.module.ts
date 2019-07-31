import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsByDepartmentComponent } from './news-by-department/news-by-department.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'newsByDepartment/:id',component:NewsByDepartmentComponent},
  {path:'',component:HomeComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
