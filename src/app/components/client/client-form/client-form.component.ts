import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { ClientViewComponent } from '../../invoice/client-view/client-view.component';
import { FormsModule,NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';


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
             ,private activatedRoute: ActivatedRoute
             ,private router: Router) 
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
      let label='creó';
      let clientObservable=new Observable<Client>();      
      if(this.client.id>0){
        clientObservable=this.clienteService.updateCliente(this.client);
        label='actulizó'; 
      }else{
        clientObservable=this.clienteService.createCliente(this.client);
      }      
      clientObservable.subscribe({
         next:(client)=>{
           this.client=client;
           Swal.fire({
            position: "top",
            icon: "success",
            title: `Se ${label} correctamente`,
            showConfirmButton: true,
            timer: 1600
          });
           this.router.navigate(['/client']);
         },
         error:(error)=>{
           console.log("Erro create cliente",error);
           Swal.fire({
            position: "top",
            icon: "error",
            title: `Erro create cliente`,
            showConfirmButton: true,
            timer: 1600
          });

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
