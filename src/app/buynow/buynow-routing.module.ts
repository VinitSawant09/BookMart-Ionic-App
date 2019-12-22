import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuynowPage } from './buynow.page';

const routes: Routes = [
  {
    path: '',
    component: BuynowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuynowPageRoutingModule {}
