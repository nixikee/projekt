import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { getAgreementSpecificationForm } from './../../../shared/forms/agreement-specification.form';

@Component({
  selector: 'app-add-agreement-specification-modal',
  templateUrl: './add-agreement-specification-modal.component.html',
  styleUrls: ['./add-agreement-specification-modal.component.scss']
})
export class AddAgreementSpecificationModalComponent implements OnInit {
  form: FormGroup | null = null;

  constructor(public dialogRef: MatDialogRef<AddAgreementSpecificationModalComponent>) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = getAgreementSpecificationForm();
  }

}
