import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
             <div class="parentComponent">          
              <app-counter [counterValue]=5 (counterChange)="clickedWasPlaced($event)"></app-counter>
              <p>{{counterValue}}</p>
             </div>
            `,
  styles: [`
            .parentComponent{
              border-style: solid;
            }
  `]
})
export class AppComponent {
  counterValue = 0;
  value=5;
  clickedWasPlaced(upComingValue:number){
    this.counterValue = upComingValue;
  }
}
