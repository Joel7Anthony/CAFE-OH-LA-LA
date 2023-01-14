import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PagesModule } from './pages/pages.module';
//import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'invoice', component: InvoiceComponent},

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
