import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

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
    console.log(0, this.phoneNumber);
    this.phoneNumber = Array.from(this.elm.nativeElement.value).filter(
      (digit, i) => {
        if (i == 0) return "0123456789(".includes(digit as string)
        if (i == 4) return "0123456789)".includes(digit as string)
        if (i == 5 || i == 9) return "0123456789-".includes(digit as string)
        return "0123456789".includes(digit as string)
      }
    ).join("");
    this.ensure('(', 0);
    this.ensure(')', 4);
    this.ensure('-', 5);
    this.ensure('-', 9);
    this.elm.nativeElement.value = this.phoneNumber.slice(0, 14);
    console.log(1, this.phoneNumber);
    console.log(2, this.phoneNumber.slice(0, 14));
    console.log('f', this.elm.nativeElement.value);
  }

  constructor(public elm: ElementRef) { }
}
