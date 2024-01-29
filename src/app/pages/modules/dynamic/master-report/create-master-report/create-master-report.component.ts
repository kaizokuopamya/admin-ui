import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-master-report',
  templateUrl: './create-master-report.component.html',
  styleUrls: ['./create-master-report.component.css'],
})
export class CreateMasterReportComponent {
  masterReportForm: FormGroup;
  activeTab = 'single';

  constructor(private fb: FormBuilder) {
    this.masterReportForm = this.fb.group({
      name: ['', Validators.required],
      queryType: ['single', Validators.required],
    });
  }

  toggleTableType(value: string) {
    this.activeTab = value;
  }
}
