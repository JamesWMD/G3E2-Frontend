import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Candidato } from '../modelos/candidato.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Candidato[]> {    
    return this.http.get<Candidato[]>(`${environment.url_gateway}/candidato`);    
  }
  eliminar(id: string){
    return this.http.delete<Candidato>(`${environment.url_gateway}/candidato/${id}`,);
  }
  getCandidato(id: string): Observable<Candidato> {
    return this.http.get<Candidato>(`${environment.url_gateway}/candidato/${id}`);
  }
  crear(elCandidato: Candidato) {
    return this.http.post(`${environment.url_gateway}/candidato`, elCandidato);
  }
  editar(id:string,elCandidato: Candidato) {
    return this.http.put(`${environment.url_gateway}/candidato/${id}`, elCandidato);
  }
  
}