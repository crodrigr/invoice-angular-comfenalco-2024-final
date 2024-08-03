import { Routes } from '@angular/router';
import {InvoiceComponent} from './components/invoice/invoice.component'
import { ClientComponent } from './components/client/client.component';
import { ClientFormComponent } from './components/client/client-form/client-form.component';

export const routes: Routes = [
  
    {path: "invoice", component: InvoiceComponent},
    {path: "client", component:ClientComponent},
    {path: "client/create", component:ClientFormComponent},
    {path: "client/update/:id", component:ClientFormComponent}


];
