import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetchartReportsComponent } from './getchart-reports.component';

describe('GetchartReportsComponent', () => {
  let component: GetchartReportsComponent;
  let fixture: ComponentFixture<GetchartReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetchartReportsComponent]
    });
    fixture = TestBed.createComponent(GetchartReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
