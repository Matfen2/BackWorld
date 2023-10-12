import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCountry]',
})
export class CountryDirective {
  constructor(private el: ElementRef) {
    this.opacity('1.0');
    this.transform('scale(1.0)');
  }

  private opacity(show: string) {
    this.el.nativeElement.style.opacity = show;
  }

  private transform(up: string) {
    this.el.nativeElement.style.transform = up;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.opacity('1.0');
    this.transform('scale(1.1)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.opacity('0.8');
    this.transform('scale(0.9)');
  }
}
