import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    SharedModule,
    LoginRoutingModule,
  ],
  exports: []
})
export class LoginModule { }
