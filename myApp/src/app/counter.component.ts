import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  inputs: ['counterValue'],
  outputs:['counterChange'],
  template: `
        <div class="childComponent">
          <button (click)="increase()" >+</button>
          <span>{{counterValue}}</span> 
          <button (click)="decrease()" >-</button>
        </div>
        `,
  styles: [`
              .childComponent{
                border-style: solid;
              }
          `]
})
export class CounterComponent implements OnInit {
          counterValue:number;
          counterChange: EventEmitter<number>;
          constructor() { 
            this.counterChange = new EventEmitter();
          }

          ngOnInit() {
          }

          increase(){
            this.counterValue ++;
            this.counterChange.emit(this.counterValue);
            return false;
          }
          decrease(){
            this.counterValue --;
            this.counterChange.emit(this.counterValue);
            return false;
          }


}
