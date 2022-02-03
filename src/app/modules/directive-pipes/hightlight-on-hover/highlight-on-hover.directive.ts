import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightOnHover]'
})
export class HighlightOnHoverDirective {

  @HostBinding("style.background-color") bgColor:string = "rgba(190, 190, 190, 0.3)";

  @HostListener("mouseenter") onMouseEnter() {
    this.bgColor = "rgba(190, 190, 190, 0.7)";
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.bgColor = "rgba(190, 190, 190, 0.3)";
  }

  constructor() { }

}
