import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicamentComponent } from './view-medicament.component';

describe('ViewMedicamentComponent', () => {
  let component: ViewMedicamentComponent;
  let fixture: ComponentFixture<ViewMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMedicamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
