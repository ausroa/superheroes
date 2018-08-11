import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHeroLinkColor]'
})
export class HeroLinkColorDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  @HostListener('mouseenter') mouseOver(event: Event) {
    this.backgroundColor = 'lightblue';
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.backgroundColor = 'transparent';
  }

}
