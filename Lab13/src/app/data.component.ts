import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  inputs: ['data'],
  template: `
                <ul>
                  <li *ngFor="let name of data">{{ name }}</li>
                </ul>
       
            `,
  styles: ['']
})
export class DataComponent implements OnInit {
  myData:string[]; 
  constructor() { }

  ngOnInit() {
  }

}
