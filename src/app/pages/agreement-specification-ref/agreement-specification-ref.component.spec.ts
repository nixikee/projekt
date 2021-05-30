import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementSpecificationRefComponent } from './agreement-specification-ref.component';

describe('AgreementSpecificationRefComponent', () => {
  let component: AgreementSpecificationRefComponent;
  let fixture: ComponentFixture<AgreementSpecificationRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementSpecificationRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementSpecificationRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
