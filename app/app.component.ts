import { Component, OnInit, ViewChild } from '@angular/core';
import { gridData1, employeeData } from './data';
import { Grid, prepareColumns } from '@syncfusion/ej2-grids';
import { PageService } from '@syncfusion/ej2-ng-grids';

@Component({
    selector: 'my-app',
    template: `<button ej-button (click)='onchange()'> Change Data</button> 
    <ej-grid #grid [dataSource]='data' allowPaging='true' [columns]='columns' [pageSettings]='pageSettings'>
    </ej-grid>`,
    providers: [PageService]
})

export class AppComponent implements OnInit {

    @ViewChild('grid')
    public grid: Grid;
    public data: Object[];
    public pageSettings: Object;
    public columns;

    public ngOnInit(): void {
        this.data = gridData1;
        this.pageSettings = { pageCount: 5 };
        this.columns =  [
            { field: 'OrderID', headerText: 'Order ID', textAlign: 'right', width: 140 },
            { field: 'CustomerID', headerText: 'Customer ID', width:150 },
            { field: 'ShipName', headerText: 'Ship Name', width: 100 },
            { field: 'ShipAddress', headerText: 'Ship Address',width: 150 }
        ];
    }

    onchange(){
        if(this.grid.dataSource === employeeData ){
            this.grid.dataSource = gridData1; // dynamically changing datasource.
            this.grid.dataBind();
            this.grid.columns = [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'right', width: 140 },
                { field: 'CustomerID', headerText: 'Customer ID', width:150 },
                { field: 'ShipName', headerText: 'Ship Name', width: 100 },
                { field: 'ShipAddress', headerText: 'Ship Address',width: 150 },
            ];
            prepareColumns(this.grid.columns); // prepare new column object
            this.grid.refresh(); // refresh the grid.
        } else {
            this.grid.dataSource = employeeData; // dynamically changing datasource.
            this.grid.dataBind(); 
            this.grid.columns = [{ field: 'EmployeeID', headerText: 'Employee ID', textAlign: 'right', width: 125 },
            { field: 'FirstName', headerText: 'Name', width: 120 },
            { field: 'Title', headerText: 'Title', width: 170 }];
            prepareColumns(this.grid.columns); // prepare new column object
            this.grid.refresh(); // refresh the grid.
        }
    }
}
