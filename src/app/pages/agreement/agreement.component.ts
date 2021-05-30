import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from './../../services/fb-base/fb-base.service';
import { Agreement } from './../../shared/models/agreement';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.scss']
})
export class AgreementComponent implements OnInit {
  title = 'Agreement';
  agreements: Observable<Agreement[]> | null = null;
  errorObject = null;

  constructor(private service: FbBaseService<Agreement>, private router: Router) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.errorObject = null;
    this.agreements = this.service.get('agreements').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  onGetAgreement(event: Agreement): void {
    this.router.navigateByUrl('/home/agreement/' + event.id);
  }
}
