import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CardDashboardComponent } from './component/card-dashboard/card-dashboard.component';
import { AppModule } from 'src/app/app.module';
import { MenuAsideComponent } from 'src/app/modules/dashboard/component/menu-aside/menu-aside.component';
@NgModule({
  declarations: [
    DashboardComponent,
    CardDashboardComponent,
    MenuAsideComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  exports: []
})
export class DashboardModule { }
