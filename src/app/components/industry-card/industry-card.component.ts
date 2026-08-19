import { Component, Input } from '@angular/core';
import { RevealDirective } from '../../services/reveal.directive';

@Component({
  selector: 'arka-industry-card',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <div class="industry-card" arkaReveal>
      <span class="industry-card__icon" aria-hidden="true">{{ icon }}</span>
      <span class="industry-card__name">{{ name }}</span>
    </div>
  `,
  styles: [`
    .industry-card {
      display: flex;
      align-items: center;
      gap: 14px;
      background: var(--arka-white);
      border: 1px solid var(--arka-border);
      border-radius: var(--radius-md);
      padding: 20px 22px;
      transition: transform var(--transition), border-color var(--transition), background var(--transition);
    }
    .industry-card:hover {
      transform: translateY(-4px);
      border-color: var(--arka-gold);
      background: var(--arka-bg);
    }
    .industry-card__icon {
      font-size: 1.4rem;
      width: 42px; height: 42px;
      display: flex; align-items: center; justify-content: center;
      background: var(--arka-bg);
      border-radius: 50%;
      flex-shrink: 0;
    }
    .industry-card__name { font-weight: 700; color: var(--arka-navy); font-size: 0.95rem; }
  `],
})
export class IndustryCardComponent {
  @Input() icon = '⬡';
  @Input({ required: true }) name = '';
}
