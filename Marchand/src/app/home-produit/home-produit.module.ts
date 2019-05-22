import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeProduitPage } from './home-produit.page';
import { AjoutPage } from '../pages-produit/ajout/ajout.page';

const routes: Routes = [
  {
    path: '',
    component: HomeProduitPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeProduitPage, AjoutPage],
  entryComponents: [AjoutPage]
})
export class HomeProduitPageModule {}
