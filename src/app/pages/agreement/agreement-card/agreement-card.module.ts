import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementCardComponent } from './agreement-card.component';
import { UpdateAgreementModalModule } from './../../../widgets/modals/update-agreement-modal/update-agreement-modal.module';
import { AgreementSpecificationRefModule } from '../../agreement-specification-ref/agreement-specification-ref.module';
import { MatCardModule } from '@angular/material/card';
import { ContainerModule } from './../../../shared/container/container.module';
import { AgreementRoutingModule } from '../agreement-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AgreementCardComponent
  ],
  imports: [
    CommonModule,
    AgreementRoutingModule,
    UpdateAgreementModalModule,
    AgreementSpecificationRefModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    ContainerModule
  ],
  exports: [
    AgreementCardComponent
  ]
})
export class AgreementCardModule { }
