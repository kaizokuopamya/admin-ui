import { Component } from '@angular/core';
import { Router } from '@angular/router';
import $ from 'jquery';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private _router: Router, public dataService: DataService) {}

  ngOnInit(): void {}

 
}
