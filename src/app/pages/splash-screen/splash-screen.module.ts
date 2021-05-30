import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen.component';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { SplashScreenRoutingModule } from './splash-screen-routing.module';



@NgModule({
  declarations: [
    SplashScreenComponent
  ],
  imports: [
    CommonModule,
    SplashScreenRoutingModule,
    MatCardModule,
    MatRippleModule
  ],
  exports: [
    SplashScreenComponent
  ]
})
export class SplashScreenModule { }
