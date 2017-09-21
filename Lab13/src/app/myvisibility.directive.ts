
import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMyVisibility]'
})

export class MyvisibilityDirective {
  @Input() appMyVisibility: boolean;
  
        constructor(private e: ElementRef, private r: Renderer) { 
          r.setElementStyle(e.nativeElement, 'display', 'inline');
        }

        ngOnInit(){
          if(this.appMyVisibility)
              this.e.nativeElement.style.display = 'none'; 
           else
               this.e.nativeElement.style.display = 'inline';
         
        }

     
         
      
}
