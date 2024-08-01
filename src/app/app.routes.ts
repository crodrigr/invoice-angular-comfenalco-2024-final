import { Routes } from '@angular/router';
import {InvoiceComponent} from './components/invoice/invoice.component'
import { ClientComponent } from './components/client/client.component';

export const routes: Routes = [
  
    {path: "invoice", component: InvoiceComponent},
    {path: "client", component:ClientComponent}


];
