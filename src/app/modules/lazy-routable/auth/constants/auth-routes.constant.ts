import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { AuthComponent } from '../views/auth/auth.component';

export enum AuthPaths {
  Blank = '',
  Login = 'login',
}

export const AuthRoutes: Routes = [
  {
    path: AuthPaths.Blank,
    component: AuthComponent,
    children: [
      {
        path: AuthPaths.Login,
        component: LoginComponent,
      },
    ],
  },
];
