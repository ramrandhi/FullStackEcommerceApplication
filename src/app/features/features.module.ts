import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [CommonModule, FeaturesRoutingModule, RouterModule],
  exports: [RouterModule],
})
export class FeaturesModule {}
