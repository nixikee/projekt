import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAgreementModalComponent } from './update-agreement-modal.component';

describe('UpdateAgreementModalComponent', () => {
  let component: UpdateAgreementModalComponent;
  let fixture: ComponentFixture<UpdateAgreementModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAgreementModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAgreementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
