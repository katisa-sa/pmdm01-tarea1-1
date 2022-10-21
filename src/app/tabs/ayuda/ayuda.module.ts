
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ayudaPage } from './ayuda.page';

import { ayudaPageRoutingModule } from './ayuda-routing.module';
import { HeaderTabComponent } from 'src/app/shared/header-tab/header-tab.component';
import { ComponentesModule } from './../../shared/componentes.module';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ayudaPage }]),
    ayudaPageRoutingModule,
    ComponentesModule
  ],
  declarations: [ayudaPage]
})
export class ayudaPageModule {}
