import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BrowserComponent } from './pages/browser/browser.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'browser',
    component: BrowserComponent,
    canActivate:[authGuard]
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
