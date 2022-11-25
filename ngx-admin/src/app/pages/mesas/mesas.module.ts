import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesasRoutingModule } from './mesas-routing.module';
import { BorrarComponent } from './borrar/borrar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarEspecificaComponent } from './listar-especifica/listar-especifica.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BorrarComponent,
    ActualizarComponent,
    ListarComponent,
    CrearComponent,
    ListarEspecificaComponent
  ],
  imports: [
    CommonModule,
    MesasRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class MesasModule { }
