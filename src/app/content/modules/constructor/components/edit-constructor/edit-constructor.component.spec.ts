import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConstructorComponent } from './edit-constructor.component';

describe('EditConstructorComponent', () => {
  let component: EditConstructorComponent;
  let fixture: ComponentFixture<EditConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
