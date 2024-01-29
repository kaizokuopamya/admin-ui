import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';
import { CommonMethods } from 'src/app/services/common-method';

@Component({
  selector: 'app-getchartreport-data',
  templateUrl: './getchartreport-data.component.html',
  styleUrls: ['./getchartreport-data.component.css'],
})
export class GetchartreportDataComponent {
  charts: any = [];
  chartID: string = '';
  date: string = '';
  myChart: Chart | null = null;
  chartOptions: any[] = [];
  selectedChartType: any = '';
  chartTypes: any[] = [
    { id: 'line', name: 'Line Chart' },
    { id: 'bar', name: 'Bar Chart' },
  ];

  constructor(
    private dataService: DataService,
    private constant: AppConstants,
    private httpService: HttpRestApiService,
    private commonMethod: CommonMethods,
    private datePipe: DatePipe
  ) {
    Chart.register(...registerables);
    this.getAllCharts();
  }

  generateChart(): void {
    if (this.myChart) {
      this.myChart.destroy();
    }
    const GETCHARTREPORTDATA = this.constant.serviceName_GETCHARTREPORTDATA;
    const selectedDate = new Date(this.date);
    const formattedDate = this.datePipe.transform(selectedDate, 'dd-MM-yyyy');

    const inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_ID]: this.chartID,
      [this.constant.key_fromDate]: formattedDate,
      [this.constant.key_dataPlainTextRequied]: 'Y',
    };

    this.httpService.callApiServices(GETCHARTREPORTDATA, inputData).subscribe({
      next: (data) => {
        const responseData = data.responseParameter;
        if (responseData.opstatus === '00') {
          this.handleSuccessChart(data.set.records);
        } else if (responseData.opstatus == '01') {
          this.handleErrorChart(responseData.Result);
        }
      },
      error: (error) => console.error(error),
    });
  }

  handleSuccessChart(response: any[]): void {
    const labels = response
      .map((item) => {
        const dateWithTime = item['TRUNC(CREATEDON)'];
        const dateObject = new Date(dateWithTime);
        return dateObject;
      })
      .sort((a, b) => a.getTime() - b.getTime())
      .map((sortedDate) => {
        const dateWithoutTime = sortedDate.toISOString().split('T')[0];
        return this.datePipe.transform(dateWithoutTime, 'd/M/yy');
      });

    const counts = response.map((item) => +item['COUNT(*)']);

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    this.myChart = new Chart(ctx, {
      type: this.selectedChartType,
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Count',
            data: counts,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: this.getChartOptions(),
    });
  }

  handleErrorChart(errorMessage: string): void {
    this.commonMethod.openPopup('div.popup-bottom.error-popup');
    this.dataService.information = 'Chart Not Found';
    this.dataService.informationLabel = errorMessage;
  }

  getChartOptions(): any {
    return {
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'Date (DD/MM/YY)',
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'Count',
          },
          beginAtZero: true,
        },
      },
    };
  }

  getAllCharts() {
    const GETALLCHARTREPORTS = this.constant.serviceName_GETALLCHARTREPORTS;
    let inputData = {
      ...this.dataService.commonInputData(),
    };
    this.httpService.callApiServices(GETALLCHARTREPORTS, inputData).subscribe({
      next: (data) => {
        this.charts = data.set.records;
      },
      error: (error) => console.error(error),
    });
  }
}
