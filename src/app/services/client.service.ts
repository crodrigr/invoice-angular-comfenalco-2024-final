import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { Client } from '../models/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly apiUrl=`${environment.apiUrl}/clientes`

  constructor(private http: HttpClient) 
  { 
   // this.apiUrl=environment.apiUrl
  }


  getClients(): Observable<Client[]>{
     return this.http.get<Client[]>(`${this.apiUrl}/`);
  }

}
