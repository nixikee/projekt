import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateAgreementModalComponent } from './update-agreement-modal.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerModule } from 'src/app/shared/container/container.module';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    UpdateAgreementModalComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ContainerModule,
    MatListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDialogModule
  ], 
  exports: [
    UpdateAgreementModalComponent
  ]
})
export class UpdateAgreementModalModule { }
