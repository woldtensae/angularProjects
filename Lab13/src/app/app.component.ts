import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
 
  template: `
              <app-data [data]='data' upper></app-data>
              <p upper>some text that needs to be capitalized</p>
              <h1 appMyVisibility = "val">hidden text</h1>
            
              <p appMycolor (colorChange)="clickedEvent($event)">change the color of this content<p>
              {{myColor}}

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myColor ='';
  data = ["aman","kebde","leama","tassa"]
  
  clickedEvent(color:string){
      this.myColor = color;
  }
}
