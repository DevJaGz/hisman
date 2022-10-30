import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreRoutes } from './constants/core-routes.constant';

@NgModule({
  imports: [RouterModule.forRoot(CoreRoutes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
