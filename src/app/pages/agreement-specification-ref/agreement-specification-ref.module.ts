import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementSpecificationRefComponent } from './agreement-specification-ref.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AgreementSpecificationRefComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    AgreementSpecificationRefComponent
  ]
})
export class AgreementSpecificationRefModule { }
