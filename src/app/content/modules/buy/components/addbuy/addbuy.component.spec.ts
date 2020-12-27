import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbuyComponent } from './addbuy.component';

describe('AddbuyComponent', () => {
  let component: AddbuyComponent;
  let fixture: ComponentFixture<AddbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
