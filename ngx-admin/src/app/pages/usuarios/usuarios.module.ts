import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { BorrarComponent } from './borrar/borrar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { ListarEspecificoComponent } from './listar-especifico/listar-especifico.component';
import { AsignarRolAUsuarioComponent } from './asignar-rol-a-usuario/asignar-rol-a-usuario.component';
import { ValidarUnUsuarioComponent } from './validar-un-usuario/validar-un-usuario.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BorrarComponent,
    ActualizarComponent,
    CrearComponent,
    ListarComponent,
    ListarEspecificoComponent,
    AsignarRolAUsuarioComponent,
    ValidarUnUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class UsuariosModule { }
