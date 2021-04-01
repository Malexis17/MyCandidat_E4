import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsulterCandidatPageRoutingModule } from './consulter-candidat-routing.module';

import { ConsulterCandidatPage } from './consulter-candidat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsulterCandidatPageRoutingModule
  ],
  declarations: [ConsulterCandidatPage]
})
export class ConsulterCandidatPageModule {}
