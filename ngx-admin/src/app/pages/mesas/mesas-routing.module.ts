import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { BorrarComponent } from './borrar/borrar.component';
import { CrearComponent } from './crear/crear.component';
import { ListarEspecificaComponent } from './listar-especifica/listar-especifica.component';
import { ListarComponent } from './listar/listar.component';

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
      path: 'actualizar/:id_mesa',
      component: CrearComponent
      },
  {
      path: 'borrar',
      component: BorrarComponent
      },
  {
      path: 'listar-especifica/:id_mesa',
      component: ListarEspecificaComponent
      }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesasRoutingModule { }
