import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServiceComponent } from './view-service.component';

describe('ViewServiceComponent', () => {
  let component: ViewServiceComponent;
  let fixture: ComponentFixture<ViewServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
