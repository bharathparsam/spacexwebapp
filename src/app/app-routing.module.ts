import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'portal',
    // canActivate: [AuthorizedGuard],
    loadChildren: () => import('./portal/portal.module').then(m => m.PortalModule)
  }
];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'});

