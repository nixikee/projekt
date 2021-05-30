import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from './../../../services/fb-base/fb-base.service';
import { AgreementSpecification } from './../../../shared/models/agreement-specification';
import { UpdateAgreementSpecificationModalComponent } from './../../../widgets/modals/update-agreement-specification-modal/update-agreement-specification-modal.component';

@Component({
  selector: 'app-agreement-specification-card',
  templateUrl: './agreement-specification-card.component.html',
  styleUrls: ['./agreement-specification-card.component.scss']
})
export class AgreementSpecificationCardComponent implements OnInit {
  @Input() agreementSpecification: AgreementSpecification = {} as any;
  @Output() getAgreementSpecification = new EventEmitter<AgreementSpecification>();

  constructor(private dialog: MatDialog, private service: FbBaseService<AgreementSpecification>) { }

  ngOnInit(): void {
  }

  openDialog(data: string): void {
    const dialogRef = this.dialog.open(UpdateAgreementSpecificationModalComponent, {});
    dialogRef.afterClosed().subscribe((agreementSpecification: AgreementSpecification) => {
      if (agreementSpecification?.name) {
        this.service.update('agreementSpecifications', data, agreementSpecification);
      }
    }, err => {
      console.warn(err);
    });
  }

  onDelete(agreementSpecification: AgreementSpecification) {
    this.service.delete('agreementSpecifications', agreementSpecification.id);
  }

}
