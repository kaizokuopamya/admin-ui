import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-data-server',
  templateUrl: './dropdown-data-server.component.html',
  styleUrls: ['./dropdown-data-server.component.css']
})
export class DropdownDataServerComponent {
  apiUrl: string = '';
  jsonPayload: string = '';
  rawJsonPayload: string = '';
  response: any;

  constructor(
    private http: HttpClient,
  ) {
  }

  invokeApi(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http
      .post(this.apiUrl, this.jsonPayload, { headers })
      .subscribe((data) => {
        this.response = data;
      });
  }

  beautifyJson(): void {
    try {
      this.jsonPayload = JSON.stringify(JSON.parse(this.rawJsonPayload), null, 2);
    } catch (error) {
      this.jsonPayload = this.rawJsonPayload;
    }
  }
}
