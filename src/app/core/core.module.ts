import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreRoutingModule],
  exports: [CoreRoutingModule],
})
export class CoreModule {}
