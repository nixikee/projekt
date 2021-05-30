import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAgreementComponent } from './add-agreement.component';
import { MatRippleModule } from '@angular/material/core';
import { AddAgreementRoutingModule } from './add-agreement-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddAgreementModalModule } from './../../widgets/modals/add-agreement-modal/add-agreement-modal.module';
import { AddAgreementSpecificationModalModule } from './../../widgets/modals/add-agreement-specification-modal/add-agreement-specification-modal.module';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AddAgreementComponent
  ],
  imports: [
    CommonModule,
    AddAgreementRoutingModule,
    AddAgreementModalModule,
    AddAgreementSpecificationModalModule,
    MatRippleModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    AddAgreementComponent
  ]
})
export class AddAgreementModule { }
