import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { ColumnMode, SortType } from '@swimlane/ngx-datatable';
import { CommonMethods } from 'src/app/services/common-method';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import { js2xml } from 'xml-js';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  @Input() rows: any[] = [];
  @Input() columns: any[] = [];
  @Input() selectedTemplateClass: string = 'material expanded';
  @Input() loadingIndicator: boolean = true

  @Output() search: EventEmitter<string> = new EventEmitter<string>();
  @Output() changeTemplate: EventEmitter<string> = new EventEmitter<string>();


  ColumnMode = ColumnMode;
  SortType = SortType;
  reorderable = true;

  filteredRow: any[] = [];

  // Search icon
  faSearch = faSearch;

  // Template options
  templates: { id: string, value: string }[] = [
    { id: 'Template 1', value: 'material expanded' },
    { id: 'Template 2', value: 'dark expanded' },
    { id: 'Template 3', value: 'bootstrap expanded' },
    { id: 'Template 4', value: 'material' }
  ];

  constructor(public commonMethod: CommonMethods) { }

  // Emit search event
  onSearch(event: any) {
    this.search.emit(event.target.value);
  }

  // Emit template change event
  onTemplateChange(template: string) {
    this.changeTemplate.emit(template);
  }

  // Export data based on exportType (csv, excel, pdf)
  exportData(exportType: string): void {
    const data = this.rows;
    const cols = this.columns;
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    let blob: Blob | null = null;

    switch (exportType) {
      case 'csv':
        XLSX.utils.book_append_sheet(workbook, ws, 'Sheet1');
        XLSX.writeFile(workbook, `Report.csv`);
        break;

      case 'excel':
        XLSX.utils.book_append_sheet(workbook, ws, 'Sheet1');
        XLSX.writeFile(workbook, `Report.xlsx`);
        break;

      case 'pdf':
        const doc = new jsPDF('l', 'mm', 'a4');

        // Add logo
        const img = new Image();
        img.src = "../../../../../assets/icons/logo.png";
        doc.addImage(img, 'PNG', 220, 10, 60, 40);

        // Add title
        doc.setFontSize(14);
        doc.text('Kiya.ai', 20, 10);

        // Add address
        doc.setFontSize(10);
        const addressText = `Registered Office:\nInfrasoft Technologies Limited\n7th Floor, Building 09,\nGigaplex, Airoli West,\nNavi Mumbai – 400708.\n\nTel: +91 22 6101 2200`;
        doc.text(addressText, 20, 25);

        // Generate table
        autoTable(doc, {
          theme: 'grid',
          headStyles: { lineWidth: 0.2, fillColor: [220, 220, 220], textColor: [0, 0, 0] },
          horizontalPageBreak: true,
          didDrawPage: function (data) {
            // Resetting top margin. The change will be reflected only after printing the first page.
            data.settings.margin.top = 10;
          },
          margin: { top: 80 },
          head: [cols.map(header => header.name)],
          body: data.map(row => Object.values(row))
        });
        doc.save('Report.pdf');
        break;

      case 'word':
        const tableHtml = this.tableToHtml(data);
        blob = new Blob(['<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>' + tableHtml + '</body></html>'], {
          type: 'application/msword',
        });
        saveAs(blob, 'Report.doc');
        break;

      case 'xml':
        const xmlData = {
          _declaration: { _attributes: { version: '1.0', encoding: 'utf-8' } },
          root: data.reduce((acc, row, index) => {
            const item: any = {};
            Object.entries(row).forEach(([key, value]) => {
              item[key] = { _text: value };
            });
            acc[index] = item;
            return acc;
          }, {})
        };
        const xmlString = js2xml(xmlData, { compact: true, spaces: 4 });
        blob = new Blob([xmlString], { type: 'application/xml' });
        saveAs(blob, 'Report.xml');
        break;
      default:
        console.error('Invalid export type');
        break;
    }
  }
  private tableToHtml(data: any[]): string {
    // Convert your data array to an HTML table
    const header = Object.keys(data[0]);
    const rows = data.map((row) => Object.values(row));
    const headerHtml = `<tr>${header.map((h) => `<th>${h}</th>`).join('')}</tr>`;
    const rowsHtml = rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('');
    return `<table border="1">${headerHtml}${rowsHtml}</table>`; // Add table border
  }
}
