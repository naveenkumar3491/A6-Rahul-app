import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  displayedColumns1 = ['position', 'name', 'weight', 'symbol'];
  displayedColumns2 = ['position', 'name'];
  dataSource1 = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
  ];
  dataSource2 = [
    { position: 1, name: 'Hydrogen'},
    { position: 2, name: 'Helium'  },
    { position: 3, name: 'Lithium' },
    { position: 4, name: 'Beryllium' },
    { position: 5, name: 'Boron'},
    { position: 6, name: 'Carbon' },
    { position: 7, name: 'Nitrogen' },
    { position: 8, name: 'Oxygen' },
    { position: 9, name: 'Fluorine'},
    { position: 10, name: 'Neon' }
  ];
}

