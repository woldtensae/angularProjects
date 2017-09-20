import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
 
  template: `
              <app-data [data]='data' upper></app-data>
              <p upper>some text that needs to be capitalized</p>
              <h1 appMyVisibility = "val">hidden text</h1>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = ["aman","kebde","leama","tassa"]
}
