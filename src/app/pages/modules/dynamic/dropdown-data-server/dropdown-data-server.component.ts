import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-data-server',
  templateUrl: './dropdown-data-server.component.html',
  styleUrls: ['./dropdown-data-server.component.css']
})
export class DropdownDataServerComponent {
  apiUrl = '';
  jsonPayload = '';
  response: any;
  prettyResponse = '';

  constructor(private http: HttpClient) { }

  invokeApi() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post(this.apiUrl, this.jsonPayload, { headers }).subscribe({
      next: (data: any) => this.response = data,
      error: (error) => this.response = error
    });
  }
}