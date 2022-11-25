import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { BorrarComponent } from './borrar/borrar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarEspecificoComponent } from './listar-especifico/listar-especifico.component';
import { ListarComponent } from './listar/listar.component';
import { ValidarUnPermisoRolComponent } from './validar-un-permiso-rol/validar-un-permiso-rol.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent
    },
  {
      path: 'crear',
      component: CrearComponent
      },
  { 
      path: 'actualizar/:id/rol/:id_rol/permiso/:id_permiso',
      component: CrearComponent
      },
  {
      path: 'borrar',
      component: BorrarComponent
      },
  {
      path: 'listar-especifico',
      component: ListarEspecificoComponent
      },
  {
      path: 'validar-un-permiso-rol',
      component: ValidarUnPermisoRolComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisosRolesRoutingModule { }
