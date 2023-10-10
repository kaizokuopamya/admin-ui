import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonMethods } from 'src/app/services/common-method';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private _router: Router,
    public dataService: DataService,
    public commonMethod: CommonMethods
  ) {}

  ngOnInit(): void {}

}
