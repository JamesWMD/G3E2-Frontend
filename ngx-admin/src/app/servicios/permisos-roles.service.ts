import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Permiso_Rol } from '../modelos/permiso-rol.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class Permisos_RolesService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Permiso_Rol[]> {
    this.http.get<Permiso_Rol[]>(`${environment.url_gateway}/permisos-roles`);
    console.log(this.http.get<Permiso_Rol[]>(`${environment.url_gateway}/permisos-roles`));
    return this.http.get<Permiso_Rol[]>(`${environment.url_gateway}/permisos-roles`);
  }
  eliminar(id: string) {
    return this.http.delete<Permiso_Rol>(`${environment.url_gateway}/permisos-roles/${id}`,);
  }
  getPermiso_Rol(id: string): Observable<Permiso_Rol> {
    return this.http.get<Permiso_Rol>(`${environment.url_gateway}/permisos-roles/${id}`);
  }
  crear(elPermiso_Rol: Permiso_Rol) {
    return this.http.post(`${environment.url_gateway}/permisos-roles/rol/permiso`, elPermiso_Rol);
  }
  editar(id_permiso_rol:string,id_rol:string,id_permiso:string,elPermiso_Rol: Permiso_Rol) {
    return this.http.put(`${environment.url_gateway}/permisos-roles/${id_permiso_rol}/rol/${id_rol}/permiso/${id_permiso}`, elPermiso_Rol);
  }

}
