import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConstructorComponent } from './add-constructor.component';

describe('AddConstructorComponent', () => {
  let component: AddConstructorComponent;
  let fixture: ComponentFixture<AddConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
