import {  Directive, EventEmitter, ElementRef, HostListener, TemplateRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMycolor]',
  outputs:['colorChange']
})
export class MycolorDirective {
i:number = 0;  
colors = ["blue", "red", "black", "yellow", "green"];
colorChange: EventEmitter<string>;
  constructor( private  el:ElementRef, private r: Renderer) {
    r.setElementStyle(el.nativeElement, 'color', this.colors[this.i]);
    this.colorChange = new EventEmitter();
   }

      @HostListener('click') bar(){ 
        this.el.nativeElement.style.color = this.colors[this.i];
        this.colorChange.emit(this.colors[this.i]);
        this.i++;
        if(this.i>this.colors.length-1) this.i = 0; 
  } 
}
