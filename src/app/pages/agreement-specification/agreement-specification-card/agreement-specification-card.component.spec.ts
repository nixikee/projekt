import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementSpecificationCardComponent } from './agreement-specification-card.component';

describe('AgreementSpecificationCardComponent', () => {
  let component: AgreementSpecificationCardComponent;
  let fixture: ComponentFixture<AgreementSpecificationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgreementSpecificationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementSpecificationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
