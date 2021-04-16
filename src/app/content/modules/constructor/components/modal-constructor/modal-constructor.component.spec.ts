import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConstructorComponent } from './modal-constructor.component';

describe('ModalConstructorComponent', () => {
  let component: ModalConstructorComponent;
  let fixture: ComponentFixture<ModalConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
