import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatosRoutingModule } from './candidatos-routing.module';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { BorrarComponent } from './borrar/borrar.component';
import { ListarEspecificoComponent } from './listar-especifico/listar-especifico.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent,
    ActualizarComponent,
    BorrarComponent,
    ListarEspecificoComponent
  ],
  imports: [
    CommonModule,
    CandidatosRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class CandidatosModule { }
