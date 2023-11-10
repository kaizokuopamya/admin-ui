import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateMasterReportComponent } from './generate-master-report.component';

describe('GenerateMasterReportComponent', () => {
  let component: GenerateMasterReportComponent;
  let fixture: ComponentFixture<GenerateMasterReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateMasterReportComponent]
    });
    fixture = TestBed.createComponent(GenerateMasterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
