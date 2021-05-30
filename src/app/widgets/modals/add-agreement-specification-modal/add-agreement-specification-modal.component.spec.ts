import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgreementSpecificationModalComponent } from './add-agreement-specification-modal.component';

describe('AddAgreementSpecificationModalComponent', () => {
  let component: AddAgreementSpecificationModalComponent;
  let fixture: ComponentFixture<AddAgreementSpecificationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAgreementSpecificationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgreementSpecificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
