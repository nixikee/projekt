import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementSpecificationComponent } from './agreement-specification.component';
import { AgreementSpecificationRoutingModule } from './agreement-specification-routing.module';
import { AgreementSpecificationCardModule } from './agreement-specification-card/agreement-specification-card.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from './../../shared/container/container.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AgreementSpecificationComponent
  ],
  imports: [
    CommonModule,
    AgreementSpecificationRoutingModule,
    AgreementSpecificationCardModule,
    MatToolbarModule,
    ContainerModule,
    MatProgressSpinnerModule
  ],
  exports: [
    AgreementSpecificationComponent
  ]
})
export class AgreementSpecificationModule { }
