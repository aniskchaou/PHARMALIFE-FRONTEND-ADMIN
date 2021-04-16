import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTypeComponent } from './modal-type.component';

describe('ModalTypeComponent', () => {
  let component: ModalTypeComponent;
  let fixture: ComponentFixture<ModalTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
