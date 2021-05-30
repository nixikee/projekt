import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from './../../services/fb-base/fb-base.service';
import { Add } from './../../shared/models/add';
import { Agreement } from './../../shared/models/agreement';
import { AgreementSpecification } from './../../shared/models/agreement-specification';
import { AddAgreementModalComponent } from './../../widgets/modals/add-agreement-modal/add-agreement-modal.component';
import { AddAgreementSpecificationModalComponent } from './../../widgets/modals/add-agreement-specification-modal/add-agreement-specification-modal.component';
import { ADD } from './../../shared/database/add.database';

@Component({
  selector: 'app-add-agreement',
  templateUrl: './add-agreement.component.html',
  styleUrls: ['./add-agreement.component.scss']
})
export class AddAgreementComponent implements OnInit {
  title = "Add Agreement"
  @Input() add?: Add[] = [];
  adds = ADD;
  
  constructor(private dialog: MatDialog, private service: FbBaseService<Agreement>) { }

  ngOnInit(): void {
  }

  openDialog(type: String): void {
    if (type == 'add-agreement-modal') {
      const dialogRef = this.dialog.open(AddAgreementModalComponent, {});
      dialogRef.afterClosed().subscribe((agreement: Agreement) => {
        if (agreement?.name) {
          this.service.add('agreements', agreement);
        }
      }, err => {
        console.warn(err);
      });
    } else if (type == 'add-agreement-specification-modal') {
      const dialogRef = this.dialog.open(AddAgreementSpecificationModalComponent, {});
      dialogRef.afterClosed().subscribe((agreementSpecification: AgreementSpecification) => {
        if (agreementSpecification?.name) {
          this.service.add('agreementSpecifications', agreementSpecification);
        }
      }, err => {
        console.warn(err);
      });
    }
  }

  
}
