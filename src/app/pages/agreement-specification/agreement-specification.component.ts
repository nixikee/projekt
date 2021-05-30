import { Component, Input, OnInit } from '@angular/core';
import { AgreementSpecification } from './../../shared/models/agreement-specification';
import { FbBaseService } from './../../services/fb-base/fb-base.service';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-agreement-specification',
  templateUrl: './agreement-specification.component.html',
  styleUrls: ['./agreement-specification.component.scss']
})
export class AgreementSpecificationComponent implements OnInit {
  title = 'Agreement Specification';
  agreementSpecifications: Observable<AgreementSpecification[]> | null = null;
  errorObject = null;

  constructor(private service: FbBaseService<AgreementSpecification>, private router: Router) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.errorObject = null;
    this.agreementSpecifications = this.service.get('agreementSpecifications').pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  onGetAgreementSpecification(event: AgreementSpecification): void {
    this.router.navigateByUrl('/home/agreement-specification/' + event.id);
  }

}
