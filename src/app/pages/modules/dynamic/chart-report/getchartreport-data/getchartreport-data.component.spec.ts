import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetchartreportDataComponent } from './getchartreport-data.component';

describe('GetchartreportDataComponent', () => {
  let component: GetchartreportDataComponent;
  let fixture: ComponentFixture<GetchartreportDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetchartreportDataComponent]
    });
    fixture = TestBed.createComponent(GetchartreportDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
