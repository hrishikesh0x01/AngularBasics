import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFirstUpper]'
})
export class FirstUpperDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.padding = "40px";
  }

}
