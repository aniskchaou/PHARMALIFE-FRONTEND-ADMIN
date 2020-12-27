import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConstructorComponent } from './view-constructor.component';

describe('ViewConstructorComponent', () => {
  let component: ViewConstructorComponent;
  let fixture: ComponentFixture<ViewConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
