import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenutablePage } from './menutable.page';

const routes: Routes = [
  {
    path: 'menutable',
    component: MenutablePage,
    children: [
      {
        path: 'paraMarchand/seconnecter',
        children: [
          {
            path: '',
            loadChildren: '../paraMarchand/seconnecter/seconnecter.module#SeconnecterPageModule'
          }
        ]
      },
      {
        path: 'paraMarchand/actualites',
        children: [
          {
            path: '',
            loadChildren: '../paraMarchand/actualites/actualites.module#ActualitesPageModule'
          }
        ]
      },
      {
        path: 'paraMarchand/creercompte',
        children: [
          {
            path: '',
            loadChildren: '../paraMarchand/creercompte/creercompte.module#CreercomptePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/menutable/paraMarchand/seconnecter',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menutable/paraMarchand/seconnecter',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenutablePageRoutingModule {}


