import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthRoutes } from './constants/auth-routes.constant';

@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
