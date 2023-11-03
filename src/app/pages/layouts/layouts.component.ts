import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { filter, take } from 'rxjs';
import { Layout } from './layout.types';
import { DOCUMENT } from '@angular/common';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AppConstants } from 'src/app/app.constant';
import { HttpClient } from '@angular/common/http';

declare var $: any;
declare var window: any;

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css'],
})
export class LayoutsComponent implements OnInit {
  layout: Layout = 'classic';
  constructor(
    @Inject(DOCUMENT) private _document: any,
    private _activatedRoute: ActivatedRoute,
    public dataService: DataService,
    public storage: LocalStorageService,
    public constant: AppConstants,
    public httpClient: HttpClient
  ) {
    // Hide it on the first NavigationEnd event
  }

  ngOnInit(): void {
    this._updateLayout();
  }

  private _updateLayout(): void {
    this._activatedRoute.data.subscribe((params) => {
      const layoutFromQueryParam = params['layout'];
      if (layoutFromQueryParam) {
        this.layout = layoutFromQueryParam;
      }
    });
  }

}
