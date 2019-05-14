import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MenutablePageRoutingModule } from './menutable.router.module';

import { MenutablePage } from './menutable.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MenutablePageRoutingModule
  ],
  declarations: [MenutablePage]
})
export class MenutablePageModule {}
