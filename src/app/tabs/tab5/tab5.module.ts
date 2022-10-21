
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab5PageRoutingModule } from './tab5-routing.module';
import { ComponentesModule } from './../../shared/componentes.module';
import { Tab5Page } from './tab5.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PageRoutingModule,
    ComponentesModule
  ],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}

