import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgreementModalComponent } from './add-agreement-modal.component';

describe('AddAgreementModalComponent', () => {
  let component: AddAgreementModalComponent;
  let fixture: ComponentFixture<AddAgreementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAgreementModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgreementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
