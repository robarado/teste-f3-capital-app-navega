import { CommonModule } from "@angular/common";
import { LOCALE_ID, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { PrimeNgModule } from "./primeng.module";
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgApexchartsModule,
    PrimeNgModule,
    CardModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgApexchartsModule,
    PrimeNgModule,
    CardModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
})
export class SharedModule { }
