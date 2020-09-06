import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './portal.component';
import { RouterModule } from '@angular/router';
import { portalRoutes } from './portal.routes';
import {PanelModule} from 'primeng/panel';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { FiltersComponent } from './filters/filters.component';
import { ListComponent } from './list/list.component';
import { ConfigService } from '../services/config.service';
import {DataViewModule} from 'primeng/dataview';


@NgModule({
  declarations: [
    PortalComponent,
    FiltersComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(portalRoutes),
    PanelModule,
    SidebarModule,
    ButtonModule,
    CardModule,
    DataViewModule
  ],
  providers: [ConfigService]
})
export class PortalModule { }