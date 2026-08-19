import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'arka-cta',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="cta">
      <div class="container cta__inner">
        <h2>{{ heading }}</h2>
        <p>{{ text }}</p>
        <div class="cta__actions">
          <a routerLink="/contact" class="btn btn-primary">{{ primaryLabel }}</a>
          <a routerLink="/services" class="btn btn-outline">{{ secondaryLabel }}</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta {
      background: linear-gradient(135deg, var(--arka-navy) 0%, var(--arka-navy-deep) 100%);
      padding: 88px 0;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .cta::before {
      content: '';
      position: absolute;
      width: 480px; height: 480px;
      background: radial-gradient(circle, rgba(247,185,76,0.18), transparent 70%);
      top: -200px; left: 50%;
      transform: translateX(-50%);
    }
    .cta__inner { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }
    h2 { color: var(--arka-white); font-size: clamp(1.8rem, 3.5vw, 2.6rem); }
    p { color: rgba(255,255,255,0.75); font-size: 1.05rem; margin-bottom: 32px; }
    .cta__actions { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
    @media (max-width: 480px) { .cta__actions .btn { width: 100%; } .cta__actions { flex-direction: column; } }
  `],
})
export class CtaComponent {
  @Input() heading = 'Ready to Streamline Your Logistics?';
  @Input() text = 'Let ARKA Logistics handle your transportation requirements with precision, reliability and technology.';
  @Input() primaryLabel = 'Talk to ARKA';
  @Input() secondaryLabel = 'Request a Consultation';
}
