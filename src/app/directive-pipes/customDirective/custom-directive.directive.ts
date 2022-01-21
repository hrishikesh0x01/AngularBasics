import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  defBgColor: string = "black";

  @HostBinding('style.background-color') bgColor = this.defBgColor;
  @HostBinding('style.color') color = "red";

  @HostListener('mouseover') onMouseOver() {
    this.bgColor = "red";
    this.color = "white";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bgColor = this.defBgColor;
    this.color = "red";
  }

  constructor() {
  }
}
