import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HttpComponent } from './http/http.component';
import { LibraryComponent } from './library/library.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'data_binding', component: DataBindingComponent},
  {path: 'http', component: HttpComponent},
  {path: 'library', component: LibraryComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
