import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsulterCandidatPage } from './consulter-candidat.page';

const routes: Routes = [
  {
    path: '',
    component: ConsulterCandidatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsulterCandidatPageRoutingModule {}
