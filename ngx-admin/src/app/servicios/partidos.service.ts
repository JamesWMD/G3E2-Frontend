import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Partido } from '../modelos/partido.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Partido[]> {
    return this.http.get<Partido[]>(`${environment.url_gateway}/partido`);
  }
  eliminar(id: string) {
    return this.http.delete<Partido>(`${environment.url_gateway}/partido/${id}`,);
  }
  getPartido(id: string): Observable<Partido> {
    return this.http.get<Partido>(`${environment.url_gateway}/partido/${id}`);
  }
  crear(elPartido: Partido) {
    return this.http.post(`${environment.url_gateway}/partido`, elPartido);
  }
  editar(id:string,elPartido: Partido) {
    return this.http.put(`${environment.url_gateway}/partido/${id}`, elPartido);
  }

}