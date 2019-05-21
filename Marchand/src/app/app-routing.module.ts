import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', loadChildren: './menutable/menutable.module#MenutablePageModule' },
  { path: '', loadChildren: './home-produit/home-produit.module#HomeProduitPageModule' },
  { path: 'home-produit', loadChildren: './home-produit/home-produit.module#HomeProduitPageModule' },  { path: 'ajout', loadChildren: './pages-produit/ajout/ajout.module#AjoutPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
