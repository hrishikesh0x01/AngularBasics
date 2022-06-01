import { asNativeElements, ElementRef } from '@angular/core';
import { PhoneMaskDirective } from './phone-mask.directive';

const _em: ElementRef = new ElementRef(asNativeElements);

describe('PhoneMaskDirective', () => {
  it('should create an instance', () => {
    const directive = new PhoneMaskDirective(_em);
    expect(directive).toBeTruthy();
  });
});
