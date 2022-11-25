import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../modelos/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.url_gateway}/usuarios`);
  }
  eliminar(id: string) {
    return this.http.delete<Usuario>(`${environment.url_gateway}/usuarios/${id}`,);
  }
  getUsuario(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.url_gateway}/usuarios/${id}`);
  }
  crear(elUsuario: Usuario) {
    return this.http.post(`${environment.url_gateway}/usuarios`, elUsuario);
  }
  editar(id:string,elUsuario: Usuario) {
    return this.http.put(`${environment.url_gateway}/usuarios/${id}`, elUsuario);
  }

}
