import { Component, Input } from '@angular/core';
import { RevealDirective } from '../../services/reveal.directive';

@Component({
  selector: 'arka-feature-card',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <div class="feature-card" arkaReveal>
      <div class="feature-card__icon" aria-hidden="true">{{ icon }}</div>
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  `,
  styles: [`
    .feature-card {
      background: var(--arka-white);
      border: 1px solid var(--arka-border);
      border-radius: var(--radius-md);
      padding: 32px 28px;
      transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
    }
    .feature-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-soft);
      border-color: var(--arka-gold);
    }
    .feature-card__icon {
      width: 52px; height: 52px;
      display: flex; align-items: center; justify-content: center;
      background: var(--arka-bg);
      border-radius: var(--radius-sm);
      font-size: 1.4rem;
      margin-bottom: 20px;
    }
    h3 { font-size: 1.1rem; margin-bottom: 10px; }
    p { font-size: 0.95rem; margin: 0; }
  `],
})
export class FeatureCardComponent {
  @Input() icon = '⬡';
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
}
