import { Component, Input } from '@angular/core';

@Component({
  selector: 'arka-section-heading',
  standalone: true,
  template: `
    <div class="section-heading" [class.center]="center">
      @if (eyebrow) { <span class="eyebrow">{{ eyebrow }}</span> }
      <h2>{{ heading }}</h2>
      @if (subheading) { <p>{{ subheading }}</p> }
    </div>
  `,
  styles: [`
    .section-heading { max-width: 680px; margin-bottom: 48px; }
    .section-heading.center { margin-left: auto; margin-right: auto; text-align: center; }
    h2 { font-size: clamp(1.75rem, 3vw, 2.5rem); }
    p { font-size: 1.05rem; }
  `],
})
export class SectionHeadingComponent {
  @Input() eyebrow = '';
  @Input({ required: true }) heading = '';
  @Input() subheading = '';
  @Input() center = false;
}
