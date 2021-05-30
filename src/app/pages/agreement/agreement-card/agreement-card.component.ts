import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateAgreementModalComponent } from './../../../widgets/modals/update-agreement-modal/update-agreement-modal.component';
import { FbBaseService } from './../../../services/fb-base/fb-base.service';
import { Agreement } from './../../../shared/models/agreement';

@Component({
  selector: 'app-agreement-card',
  templateUrl: './agreement-card.component.html',
  styleUrls: ['./agreement-card.component.scss']
})
export class AgreementCardComponent implements OnInit {
  @Input() agreement: Agreement = {} as any;
  @Output() getAgreement = new EventEmitter<Agreement>();

  constructor(private dialog: MatDialog, private service: FbBaseService<Agreement>) { }

  ngOnInit(): void {
  }

  openDialog(data: string): void {
      const dialogRef = this.dialog.open(UpdateAgreementModalComponent, {});
      dialogRef.afterClosed().subscribe((agreement: Agreement) => {
        if (agreement?.name) {
          this.service.update('agreements', data, agreement);
        }
      }, err => {
        console.warn(err);
      });
  }
  
  onDelete(agreement: Agreement) {
    this.service.delete('agreements', agreement.id);
  }

}
