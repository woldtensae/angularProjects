import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
             <div class="parentComponent">          
              <app-counter [counterValue]=5 (counterChange)="clickedWasPlaced($event)"></app-counter>
              <p>Component counter value {{counterValue}}</p>
             </div>
            `,
  styles: [`
            .parentComponent{
              border-style: solid;
              width: 50%;
              text-align: right;
              padding-right: 20px;
            }
  `]
})
export class AppComponent {
  counterValue = 5;
  value=5;
  clickedWasPlaced(upComingValue:number){
    this.counterValue = upComingValue;
  }
}
