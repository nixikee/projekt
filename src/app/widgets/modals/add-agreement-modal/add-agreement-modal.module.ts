import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAgreementModalComponent } from './add-agreement-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AddAgreementModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    AddAgreementModalComponent
  ]
})
export class AddAgreementModalModule { }
