import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';

/**
 * Animates a numeric prefix of the host's text content when it scrolls into view.
 * Usage: <span arkaCounter [target]="99.9" suffix="%">0%</span>
 */
@Directive({
  selector: '[arkaCounter]',
  standalone: true,
})
export class CounterDirective implements OnInit {
  @Input({ required: true }) target = 0;
  @Input() suffix = '';
  @Input() decimals = 0;
  @Input() duration = 1400;

  private el = inject(ElementRef<HTMLElement>);

  ngOnInit(): void {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      this.render(this.target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animate();
            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(this.el.nativeElement);
  }

  private animate(): void {
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / this.duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      this.render(this.target * eased);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  private render(value: number): void {
    this.el.nativeElement.textContent = `${value.toFixed(this.decimals)}${this.suffix}`;
  }
}
