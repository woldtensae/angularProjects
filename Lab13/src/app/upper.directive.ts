import { Directive, ElementRef, TemplateRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[upper]'
})
export class UpperDirective {
 
  constructor( private  element:ElementRef, private r: Renderer) {
     r.setElementStyle(element.nativeElement, 'text-transform', 'uppercase');
  }

 
}
