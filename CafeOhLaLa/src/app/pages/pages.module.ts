import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FacturaComponent } from './factura/factura.component';
import { InvoiceComponent } from './invoice/invoice.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FacturaComponent,
    InvoiceComponent
  ],
  imports: [

    RouterModule,
  ],
  exports:[
    DashboardComponent
  ]
})
export class PagesModule { }
