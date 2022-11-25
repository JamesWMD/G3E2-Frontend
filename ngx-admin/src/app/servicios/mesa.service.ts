import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Mesa } from '../modelos/mesa.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Mesa[]> {    
    return this.http.get<Mesa[]>(`${environment.url_gateway}/mesa`);    
  }
  eliminar(id: string){
    return this.http.delete<Mesa>(`${environment.url_gateway}/mesa/${id}`,);
  }
  getMesa(id: string): Observable<Mesa> {
    return this.http.get<Mesa>(`${environment.url_gateway}/mesa/${id}`);
  }
  crear(laMesa: Mesa) {
    return this.http.post(`${environment.url_gateway}/mesa`, laMesa);
  }
  editar(id:string,laMesa: Mesa) {
    return this.http.put(`${environment.url_gateway}/mesa/${id}`, laMesa);
  }
  
}