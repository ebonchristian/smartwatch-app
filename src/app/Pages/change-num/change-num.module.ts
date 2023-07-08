import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangeNumPageRoutingModule } from './change-num-routing.module';

import { ChangeNumPage } from './change-num.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangeNumPageRoutingModule
  ],
  declarations: [ChangeNumPage]
})
export class ChangeNumPageModule {}
