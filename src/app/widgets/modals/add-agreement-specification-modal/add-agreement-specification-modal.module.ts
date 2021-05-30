import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAgreementSpecificationModalComponent } from './add-agreement-specification-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AddAgreementSpecificationModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [
    AddAgreementSpecificationModalComponent
  ]
})
export class AddAgreementSpecificationModalModule { }
