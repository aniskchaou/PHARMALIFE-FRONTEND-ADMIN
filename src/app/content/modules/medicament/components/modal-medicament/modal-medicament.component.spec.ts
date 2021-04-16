import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMedicamentComponent } from './modal-medicament.component';

describe('ModalMedicamentComponent', () => {
  let component: ModalMedicamentComponent;
  let fixture: ComponentFixture<ModalMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMedicamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
