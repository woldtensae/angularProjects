
import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMyVisibility]'
})

export class MyvisibilityDirective {

        constructor(private e: ElementRef, private r: Renderer) { 
          r.setElementStyle(e.nativeElement, 'display', 'inline');
        }

        @HostListener('mouseenter') foo(){ 
          this.e.nativeElement.style.display = 'none'}
        @HostListener('mouseleave') bar(){ this.e.nativeElement.style.display = 'inline'}
}
