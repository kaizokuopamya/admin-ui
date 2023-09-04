import { Component } from '@angular/core';
import { DETAILSTATEMENTITEM } from 'src/app/model/common.model';

@Component({
  selector: 'app-service1',
  templateUrl: './service1.component.html',
  styleUrls: ['./service1.component.css'],
})
export class Service1Component {
  detailStatementList: any = [];
  constructor() {}
  
  ngOnInit(): void {
    this.detailStatementList = DETAILSTATEMENTITEM;
  }
}
