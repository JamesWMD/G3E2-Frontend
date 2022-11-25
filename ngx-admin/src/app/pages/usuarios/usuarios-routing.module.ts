import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { AsignarRolAUsuarioComponent } from './asignar-rol-a-usuario/asignar-rol-a-usuario.component';
import { BorrarComponent } from './borrar/borrar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarEspecificoComponent } from './listar-especifico/listar-especifico.component';
import { ListarComponent } from './listar/listar.component';
import { ValidarUnUsuarioComponent } from './validar-un-usuario/validar-un-usuario.component';

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
      path: 'actualizar/:id_usuario',
      component: CrearComponent
      },
  {
      path: 'borrar',
      component: BorrarComponent
      },
  {
      path: 'listar-especifico/:id_usuario',
      component: ListarEspecificoComponent
      },
  {
      path: 'asignar-rol-a-usuario/usuarios/:id_usuario/roles/:id_rol',
      component: AsignarRolAUsuarioComponent
      },
  {
      path: 'validar-un-usuario/usuarios/:id_usuario',
      component: ValidarUnUsuarioComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
