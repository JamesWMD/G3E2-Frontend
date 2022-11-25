import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { BorrarComponent } from './borrar/borrar.component';
import { ListarEspecificoComponent } from './listar-especifico/listar-especifico.component';
import { ListarPorMesaComponent } from './listar-por-mesa/listar-por-mesa.component';
import { ListarMayorVotacionPorMesaComponent } from './listar-mayor-votacion-por-mesa/listar-mayor-votacion-por-mesa.component';
import { ListarVotosPorCandidatoComponent } from './listar-votos-por-candidato/listar-votos-por-candidato.component';
import { CrearValidarUsuarioComponent } from './crear-validar-usuario/crear-validar-usuario.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ActualizarComponent,
    BorrarComponent,
    ListarEspecificoComponent,
    ListarPorMesaComponent,
    ListarMayorVotacionPorMesaComponent,
    ListarVotosPorCandidatoComponent,
    CrearValidarUsuarioComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class ResultadosModule { }
