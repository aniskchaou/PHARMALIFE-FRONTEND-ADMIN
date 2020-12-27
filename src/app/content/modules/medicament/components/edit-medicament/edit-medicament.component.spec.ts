import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicamentComponent } from './edit-medicament.component';

describe('EditMedicamentComponent', () => {
  let component: EditMedicamentComponent;
  let fixture: ComponentFixture<EditMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMedicamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
