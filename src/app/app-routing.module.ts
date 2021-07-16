import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HttpComponent } from './http/http.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'data_binding', component: DataBindingComponent},
  {path: 'http', component: HttpComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
