import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {

  @HostBinding('value') phoneNumber = '';

  @HostListener('input') onPhoneInput() {
    if (this.phoneNumber.length) {
      ///////TODO
    }
  }

  constructor() { }

}
