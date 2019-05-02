import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import {settings} from './settings';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  agGridSettings = settings;
  gridOptionsTest: GridOptions = this.agGridSettings;
  constructor() {
   
    // this.gridOptionsTest = {columnDefs : [
    //     { headerName: 'Make', field: 'make' },
    //     { headerName: 'Model', field: 'model' },
    //     { headerName: 'Price', field: 'price' }
    //   ]}

    // this.gridOptionsTest.rowData = [
    //   { make: 'Toyota', model: 'Celica', price: 35000 },
    //   { make: 'Ford', model: 'Mondeo', price: 32000 },
    //   { make: 'Porsche', model: 'Boxter', price: 72000 }
    // ];
  }
}
