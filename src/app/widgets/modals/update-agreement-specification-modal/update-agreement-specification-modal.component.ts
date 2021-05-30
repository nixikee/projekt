import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { getAgreementSpecificationForm } from './../../../shared/forms/agreement-specification.form';

@Component({
  selector: 'app-update-agreement-specification-modal',
  templateUrl: './update-agreement-specification-modal.component.html',
  styleUrls: ['./update-agreement-specification-modal.component.scss']
})
export class UpdateAgreementSpecificationModalComponent implements OnInit {
  form: FormGroup | null = null;

  constructor(public dialogRef: MatDialogRef<UpdateAgreementSpecificationModalComponent>) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = getAgreementSpecificationForm();
  }

}
