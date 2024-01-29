import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, map, takeUntil, timer } from 'rxjs';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { MasterReportService } from '../master-report.service';
import { CommonMethods } from 'src/app/services/common-method';

@Component({
  selector: 'app-single-table',
  templateUrl: './single-table.component.html',
  styleUrls: ['./single-table.component.css'],
})
export class SingleTableComponent {
  @Input() name: string = '';
  singleTableForm: FormGroup;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private httpService: HttpRestApiService,
    private constant: AppConstants,
    public commonMethod: CommonMethods,
    public dataService: DataService,
    public masterService: MasterReportService,
    public router: Router
  ) {
    this.singleTableForm = this.fb.group({
      database: ['', Validators.required],
      tableName: ['', Validators.required],
      columns: [[], Validators.required],
    });
  }

  ngOnInit(): void {
    this.masterService.fetchDatabases();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  createMasterReport(): void {
    const { tableName, columns } = this.singleTableForm.value;
    let param = this.masterService.getSingleTableReportData(
      this.name,
      tableName,
      columns
    );
    const CREATEREPORT = this.constant.serviceName_CREATEREPORT;
    this.httpService
      .callApiServices(CREATEREPORT, param)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (data) => {
          const response = data.responseParameter;
          const opStatus = response.opstatus;
          this.handleApiResponse(opStatus, response.Result);
        },
        error: (error) => {
          this.handleApiError();
          console.error(error);
        },
      });
  }

  private handleApiResponse(opStatus, result): void {
    if (opStatus === '00') {
      this.commonMethod.openPopup('div.popup-bottom.success-popup');
      this.dataService.information = `${this.name} Report Created`;
      timer(2000)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(() => this.dataService.goToPage('generateMasterReport'));
    } else {
      this.commonMethod.openPopup('div.popup-bottom.error-popup');
      this.dataService.information = result;
      this.dataService.informationLabel = 'Unable to Create Report';
    }
  }

  private handleApiError(): void {
    // this.dataService.information = "Error occurred while creating the report.";
    this.dataService.informationLabel = 'Unable to Create Report';
    this.dataService.primaryBtnText = 'OK';
  }
}
