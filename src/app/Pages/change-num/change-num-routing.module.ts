import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangeNumPage } from './change-num.page';

const routes: Routes = [
  {
    path: '',
    component: ChangeNumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeNumPageRoutingModule {}
