import { Component, Input, OnInit } from '@angular/core';
import { AgreementSpecificationRef } from './../../shared/models/argeement-specification-ref';

@Component({
  selector: 'app-agreement-specification-ref',
  templateUrl: './agreement-specification-ref.component.html',
  styleUrls: ['./agreement-specification-ref.component.scss']
})
export class AgreementSpecificationRefComponent implements OnInit {
  @Input() agreementSpecRef?: AgreementSpecificationRef;

  constructor() { }

  ngOnInit(): void {
  }

}
