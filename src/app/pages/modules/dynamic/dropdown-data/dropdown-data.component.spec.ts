import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDataComponent } from './dropdown-data.component';

describe('DynamicDataComponent', () => {
  let component: DynamicDataComponent;
  let fixture: ComponentFixture<DynamicDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicDataComponent]
    });
    fixture = TestBed.createComponent(DynamicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
