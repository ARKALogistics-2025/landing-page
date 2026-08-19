import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Adds `.is-visible` to the host element when it scrolls into view.
 * Pair with the `.reveal` utility class in styles.scss.
 * Respects prefers-reduced-motion by revealing immediately.
 */
@Directive({
  selector: '[arkaReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.el.nativeElement.classList.add('reveal');

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      this.el.nativeElement.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('is-visible');
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.15 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
