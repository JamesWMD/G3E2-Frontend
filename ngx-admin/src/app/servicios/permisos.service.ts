import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Permiso } from '../modelos/permiso.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PermisosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Permiso[]> {
    return this.http.get<Permiso[]>(`${environment.url_gateway}/permisos`);
  }
  eliminar(id: string) {
    return this.http.delete<Permiso>(`${environment.url_gateway}/permisos/${id}`,);
  }
  getPermiso(id: string): Observable<Permiso> {
    return this.http.get<Permiso>(`${environment.url_gateway}/permisos/${id}`);
  }
  crear(elPermiso: Permiso) {
    return this.http.post(`${environment.url_gateway}/permisos`, elPermiso);
  }
  editar(id:string,elPermiso: Permiso) {
    return this.http.put(`${environment.url_gateway}/permisos/${id}`, elPermiso);
  }

}
