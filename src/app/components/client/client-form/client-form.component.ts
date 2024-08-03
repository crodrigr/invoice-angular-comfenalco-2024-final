import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { ClientViewComponent } from '../../invoice/client-view/client-view.component';
import { FormsModule,NgForm } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { ClientService } from '../../../services/client.service';


@Component({
  selector: 'app-client-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent implements OnInit {

  client: Client;

  constructor(private clienteService: ClientService
             ,private activatedRoute: ActivatedRoute) 
  {
     this.client=new Client();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
       const id: number = +(params.get('id')|| '0');
       if(id>0){
         this.clienteService.getClientById(id).subscribe(x=>{this.client=x});
       }
    });
  }

  onSubmit(clientForm: NgForm): void{

    if(clientForm.valid){

      const clientObservable=this.client.id>0
       ? this.clienteService.updateCliente(this.client) 
       : this.clienteService.createCliente(this.client);
      
      clientObservable.subscribe({
         next:(client)=>{
           this.client=client;
         },
         error:(error)=>{
           console.log("Erro create cliente",error);
         }

      }) 

    }

    clientForm.reset();
    clientForm.resetForm();


  }

  onClear(clientForm: NgForm): void{
    this.client=new Client();
    clientForm.reset();
    clientForm.resetForm();
  }





}
