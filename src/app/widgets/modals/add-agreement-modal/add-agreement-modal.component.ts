import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { getAgreementForm } from './../../../shared/forms/agreement.form';

@Component({
  selector: 'app-add-agreement-modal',
  templateUrl: './add-agreement-modal.component.html',
  styleUrls: ['./add-agreement-modal.component.scss']
})
export class AddAgreementModalComponent implements OnInit {
  form: FormGroup | null = null;

  constructor(public dialogRef: MatDialogRef<AddAgreementModalComponent>) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = getAgreementForm();
  }

}
