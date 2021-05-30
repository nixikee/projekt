import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAgreementSpecificationModalComponent } from './update-agreement-specification-modal.component';

describe('UpdateAgreementSpecificationModalComponent', () => {
  let component: UpdateAgreementSpecificationModalComponent;
  let fixture: ComponentFixture<UpdateAgreementSpecificationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAgreementSpecificationModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAgreementSpecificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
