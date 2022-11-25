import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisosRolesRoutingModule } from './permisos-roles-routing.module';
import { BorrarComponent } from './borrar/borrar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarEspecificoComponent } from './listar-especifico/listar-especifico.component';
import { ValidarUnPermisoRolComponent } from './validar-un-permiso-rol/validar-un-permiso-rol.component';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BorrarComponent,
    ActualizarComponent,
    ListarComponent,
    CrearComponent,
    ListarEspecificoComponent,
    ValidarUnPermisoRolComponent
  ],
  imports: [
    CommonModule,
    PermisosRolesRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class PermisosRolesModule { }
