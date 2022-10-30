import { Routes } from '@angular/router';

export enum CorePaths {
  Blank = '',
  Auth = 'auth',
}

export const CoreRoutes: Routes = [
  {
    path: CorePaths.Auth,
    loadChildren: () =>
      import('@app/modules/lazy-routable/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
];
