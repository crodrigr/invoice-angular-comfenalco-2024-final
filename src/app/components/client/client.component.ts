import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import { Client } from '../../models/client';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{

  title: string ="Clientes";
  clients: Client[]=[];

  constructor(private clientService: ClientService){

  }
  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void{
     this.clientService.getClients().subscribe({
        next:(response)=>{
          this.clients=response;
        },
        complete:()=>{
           console.log("Completado el getclientes");
           console.log(this.clients);
           for(let client  in this.clients){
             console.log("cliente:"+client);
           }
        },
        error:(err)=>{
          console.log("Error feching clients",err);
        }
     });
  }

  removeCliente(client:Client):void{
    Swal.fire({
      title: "Está seguro?",
      text: `¿Seguro que desea eliminar el cliente: ${client.nombre} ${client.apellido} `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientService.removeCliente(client.id).subscribe({
          next:()=>{
             this.clients=this.clients.filter(cli=> cli.id !== client.id);
             Swal.fire({
              title: "Cliente eliminado!",
              text: `Cliente ${client.nombre} ${client.apellido}`,
              icon: "success"
            });
          },
          error: (err)=>{
            console.error('Error al eliminar el cliente:',err);
          }
       });        
      }
    });
  }

}
