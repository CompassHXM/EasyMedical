import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationStatusComponent } from './vaccination-status.component';

describe('VaccinationStatusComponent', () => {
  let component: VaccinationStatusComponent;
  let fixture: ComponentFixture<VaccinationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccinationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
