import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { BorrarComponent } from './borrar/borrar.component';
import { CrearValidarUsuarioComponent } from './crear-validar-usuario/crear-validar-usuario.component';
import { CrearComponent } from './crear/crear.component';
import { ListarEspecificoComponent } from './listar-especifico/listar-especifico.component';
import { ListarMayorVotacionPorMesaComponent } from './listar-mayor-votacion-por-mesa/listar-mayor-votacion-por-mesa.component';
import { ListarPorMesaComponent } from './listar-por-mesa/listar-por-mesa.component';
import { ListarVotosPorCandidatoComponent } from './listar-votos-por-candidato/listar-votos-por-candidato.component';
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
      path: 'actualizar/:id/candidato/:id_candidato/mesa/:id_mesa',
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
      path: 'listar-por-mesa',
      component: ListarPorMesaComponent
      },
  {
      path: 'listar-mayor-votacion-por-mesa',
      component: ListarMayorVotacionPorMesaComponent
      },
  {
      path: 'listar-votos-por-candidato',
      component: ListarVotosPorCandidatoComponent
      },
  {
      path: 'crear-validar-usuario',
      component: CrearValidarUsuarioComponent
      }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadosRoutingModule { }
