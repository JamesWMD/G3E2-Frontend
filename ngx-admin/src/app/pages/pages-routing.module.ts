import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'seguridad',
      loadChildren: () => import('./seguridad/seguridad.module')
      .then(m => m.SeguridadModule),
      },
    {
        path: 'resultados',
        loadChildren: () => import('./resultados/resultados.module')
        .then(m => m.ResultadosModule),
      },
    {
        path: 'candidatos',
        loadChildren: () => import('./candidatos/candidatos.module')
        .then(m => m.CandidatosModule),
      }, 
    {
        path: 'mesas',
        loadChildren: () => import('./mesas/mesas.module')
        .then(m => m.MesasModule),
      },
    {
        path: 'partidos',
        loadChildren: () => import('./partidos/partidos.module')
        .then(m => m.PartidosModule),
      },
    {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios.module')
        .then(m => m.UsuariosModule),
      },
    {
        path: 'permisos',
        loadChildren: () => import('./permisos/permisos.module')
        .then(m => m.PermisosModule),
      },
    {
        path: 'roles',
        loadChildren: () => import('./roles/roles.module')
        .then(m => m.RolesModule),
      },
    {
        path: 'permisos-roles',
        loadChildren: () => import('./permisos-roles/permisos-roles.module')
        .then(m => m.PermisosRolesModule),
      },  
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
