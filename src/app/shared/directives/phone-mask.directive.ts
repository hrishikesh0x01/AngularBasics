import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {

  // @HostBinding('value') phoneNumber = '';

  @HostListener('input') onPhoneInput() {
  }

  constructor() { }

}
