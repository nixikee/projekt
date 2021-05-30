import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementSpecificationComponent } from './agreement-specification.component';

describe('AgreementSpecificationComponent', () => {
  let component: AgreementSpecificationComponent;
  let fixture: ComponentFixture<AgreementSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementSpecificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
