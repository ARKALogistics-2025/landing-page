import { Component, Input } from '@angular/core';
import { RevealDirective } from '../../services/reveal.directive';
import { ServiceItem } from '../../models/content.models';

@Component({
  selector: 'arka-service-card',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <article class="service-card" arkaReveal>
      <div class="service-card__icon" aria-hidden="true">{{ service.icon }}</div>
      <h3>{{ service.title }}</h3>
      <p>{{ service.summary }}</p>
      @if (service.points.length) {
        <ul>
          @for (point of service.points; track point) { <li>{{ point }}</li> }
        </ul>
      }
    </article>
  `,
  styles: [`
    .service-card {
      background: var(--arka-white);
      border: 1px solid var(--arka-border);
      border-radius: var(--radius-lg);
      padding: 36px 30px;
      height: 100%;
      transition: transform var(--transition), box-shadow var(--transition);
      position: relative;
      overflow: hidden;
    }
    .service-card::before {
      content: '';
      position: absolute; top: 0; left: 0; right: 0; height: 4px;
      background: linear-gradient(90deg, var(--arka-gold), var(--arka-blue));
      transform: scaleX(0);
      transform-origin: left;
      transition: transform var(--transition);
    }
    .service-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-soft); }
    .service-card:hover::before { transform: scaleX(1); }
    .service-card__icon {
      width: 56px; height: 56px;
      display: flex; align-items: center; justify-content: center;
      background: var(--arka-navy);
      color: var(--arka-gold);
      border-radius: var(--radius-sm);
      font-size: 1.5rem;
      margin-bottom: 22px;
    }
    h3 { font-size: 1.2rem; margin-bottom: 10px; }
    p { font-size: 0.95rem; margin-bottom: 16px; }
    ul { margin: 0; padding-left: 18px; color: var(--arka-text-muted); font-size: 0.9rem; }
    li { margin-bottom: 6px; }
  `],
})
export class ServiceCardComponent {
  @Input({ required: true }) service!: ServiceItem;
}
