import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import { Client } from '../../models/client';
import { CommonModule } from '@angular/common';
import { Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule],
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



}
