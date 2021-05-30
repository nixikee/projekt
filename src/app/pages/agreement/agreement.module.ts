import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementComponent } from './agreement.component';
import { AgreementCardModule } from './agreement-card/agreement-card.module';
import { AgreementRoutingModule } from './agreement-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from './../../shared/container/container.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AgreementComponent
  ],
  imports: [
    CommonModule,
    AgreementCardModule,
    AgreementRoutingModule,
    MatToolbarModule,
    ContainerModule,
    MatProgressSpinnerModule
  ],
  exports: [
    AgreementComponent
  ]
})
export class AgreementModule { }
