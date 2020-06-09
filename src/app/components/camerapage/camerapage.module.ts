import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamerapagePageRoutingModule } from './camerapage-routing.module';

import { CamerapagePage } from './camerapage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamerapagePageRoutingModule
  ],
  declarations: [CamerapagePage]
})
export class CamerapagePageModule {}
