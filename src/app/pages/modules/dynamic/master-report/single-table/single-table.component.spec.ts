import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTableComponent } from './single-table.component';

describe('SingleTableComponent', () => {
  let component: SingleTableComponent;
  let fixture: ComponentFixture<SingleTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleTableComponent]
    });
    fixture = TestBed.createComponent(SingleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
