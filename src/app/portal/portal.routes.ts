import { Routes } from "@angular/router";
import { PortalComponent } from "./portal.component";

export const portalRoutes: Routes = [
  {
    path: "list",
    component: PortalComponent,
    // loadChildren: () => import('./list/list.module').then(m => m.ListModule)
  },
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full",
  },
];
