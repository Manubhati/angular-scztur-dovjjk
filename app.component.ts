import { Component, ViewEncapsulation, Inject, ViewChild } from '@angular/core';
import { getDefaultData } from './data';
import { SpreadsheetComponent } from '@syncfusion/ej2-angular-spreadsheet';
/**
 * Default Spreadsheet Controller
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor() {}
  @ViewChild('default')
  public spreadsheetObj: SpreadsheetComponent;
  public data: Object[] = getDefaultData();
  created() {
    this.spreadsheetObj.cellFormat({ fontWeight: 'bold' }, 'E31:F31');
    this.spreadsheetObj.cellFormat({ textAlign: 'right' }, 'E31');
    this.spreadsheetObj.numberFormat('$#,##0.00', 'F2:F31');
  }
}
