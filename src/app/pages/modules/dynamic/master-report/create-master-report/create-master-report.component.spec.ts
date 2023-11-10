import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMasterReportComponent } from './create-master-report.component';

describe('CreateMasterReportComponent', () => {
  let component: CreateMasterReportComponent;
  let fixture: ComponentFixture<CreateMasterReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMasterReportComponent]
    });
    fixture = TestBed.createComponent(CreateMasterReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
