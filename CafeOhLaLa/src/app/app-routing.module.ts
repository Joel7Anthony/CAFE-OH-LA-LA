import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PagesModule } from './pages/pages.module';
//import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  // {path: 'login'},
  // {path: 'register'},

  {path: '', redirectTo: '/dashboard/', pathMatch: 'full'},

  //{path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes),
  PagesRoutingModule
],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
