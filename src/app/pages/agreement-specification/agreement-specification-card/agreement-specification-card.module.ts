import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementSpecificationCardComponent } from './agreement-specification-card.component';
import { AgreementSpecificationRoutingModule } from '../agreement-specification-routing.module';
import { UpdateAgreementSpecificationModalModule } from './../../../widgets/modals/update-agreement-specification-modal/update-agreement-specification-modal.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ContainerModule } from './../../../shared/container/container.module';



@NgModule({
  declarations: [
    AgreementSpecificationCardComponent
  ],
  imports: [
    CommonModule,
    AgreementSpecificationRoutingModule,
    UpdateAgreementSpecificationModalModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    ContainerModule
  ],
  exports: [
    AgreementSpecificationCardComponent
  ]
})
export class AgreementSpecificationCardModule { }
