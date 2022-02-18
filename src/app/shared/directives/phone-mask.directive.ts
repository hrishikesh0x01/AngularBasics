import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {

  private phoneNumber = '';

  private ensure(ch: string, index: number) {
    if (this.phoneNumber.length > index && this.phoneNumber[index] !== ch) {
      this.phoneNumber = this.phoneNumber.slice(0, index) + ch + this.phoneNumber.slice(index);
    }
  }

  @HostListener('input')
  onPhoneInput() {
    this.phoneNumber = Array.from(this.elm.nativeElement.value).filter(
      (digit, i) => {
        return "0123456789".includes(digit as string)
      }
    ).join("");
    this.ensure('(', 0);
    this.ensure(')', 4);
    this.ensure('-', 5);
    this.ensure('-', 9);
    this.elm.nativeElement.value = this.phoneNumber.slice(0, 14);
  }

  constructor(public elm: ElementRef) { }
}
