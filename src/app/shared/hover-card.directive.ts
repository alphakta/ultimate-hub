import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hoverCard]'
})
export class HoverCardDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('rgba(0, 123, 255, 0.1)');
    this.transform('scale(1.05)');
    this.borderColor('gold');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    this.transform(null);
    this.borderColor(null);
  }

  private highlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  private transform(transform: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', transform);
  }

  private borderColor(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'border-color', color);
  }
}
