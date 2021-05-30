import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { getAgreementForm } from './../../../shared/forms/agreement.form';

@Component({
  selector: 'app-update-agreement-modal',
  templateUrl: './update-agreement-modal.component.html',
  styleUrls: ['./update-agreement-modal.component.scss']
})
export class UpdateAgreementModalComponent implements OnInit {
  form: FormGroup | null = null;

  constructor(public dialogRef: MatDialogRef<UpdateAgreementModalComponent>) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = getAgreementForm();
  }

}
