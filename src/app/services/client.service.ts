import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { Client } from '../models/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly apiUrl = `${environment.apiUrl}/clientes`

  constructor(private http: HttpClient) {

  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/`);
  }

  getClientById(id:number): Observable<Client>{
     return this.http.get<Client>(`${this.apiUrl}/${id}`);
  }

  updateCliente(client: Client): Observable<Client>{
    return this.http.put<Client>(`${this.apiUrl}/${client.id}`,client);
  }

  removeCliente(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  createCliente(client:Client): Observable<Client>{
    return this.http.post<Client>(`${this.apiUrl}/`,client);
  }

}
