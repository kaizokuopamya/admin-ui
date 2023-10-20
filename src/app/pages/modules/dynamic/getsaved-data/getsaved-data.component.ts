import { Component } from '@angular/core';
import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
import { AppConstants } from 'src/app/app.constant';
import { DataService } from 'src/app/services/data.service';
import { HttpRestApiService } from 'src/app/services/http-rest-api.service';

@Component({
  selector: 'app-getsaved-data',
  templateUrl: './getsaved-data.component.html',
  styleUrls: ['./getsaved-data.component.css'],
})
export class GetsavedDataComponent {
  id: string = '1';
  header: any = [];
  maplist: any = [];
  rows: any = [];
  columns: any = [];

  //ngx-datatable variables
  ColumnMode = ColumnMode;
  SortType = SortType;
  reorderable = true;

  constructor(
    private constant: AppConstants,
    private dataService: DataService,
    private httpService: HttpRestApiService
  ) {}

  ngOnInit() {
    const GETSAVEDATA = this.constant.serviceName_GETSAVEDATA;
    const inputData = {
      ...this.dataService.commonInputData(),
      [this.constant.key_ID]: this.id,
    };

    this.httpService.callApiServices(GETSAVEDATA, inputData).subscribe({
      next: (data) => {
        const parsedHeader = JSON.parse(data.set.records[1].header);
        const parsedMaplist = JSON.parse(data.set.records[0].mapList);
        this.header = this.removeNullValuesFromObject(parsedHeader);
        this.maplist = this.addDataObject(
          this.removeNullValuesFromObject(parsedMaplist),
          this.header[0]
        );
        this.rows = this.maplist.map((each) => each.data);
        this.columns = Object.keys(this.header[0]).map((each) => ({
          name: each.toUpperCase(),
        }));
        console.log(this.rows);
        console.log(this.columns);
      },
      error: (error) => console.log(error),
    });
  }

  removeNullValuesFromObject(parsedJson) {
    return parsedJson.map((each) =>
      Object.entries(each)
        .filter((entry) => entry[1] !== null)
        .reduce((obj, [key, value]) => {
          obj[key] = value;
          return obj;
        }, {})
    );
  }

  addDataObject(parsedJson, header) {
    return JSON.parse(JSON.stringify(parsedJson)).map((each) => {
      each['data'] = Object.keys(header).reduce((result, key, index) => {
        result[key] = each['field' + (index + 1)]
          ? each['field' + (index + 1)]
          : '';
        return result;
      }, {});
      return each;
    });
  }
}
