import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { IndustryCardComponent } from '../../components/industry-card/industry-card.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { RevealDirective } from '../../services/reveal.directive';
import { IndustryItem } from '../../models/content.models';

@Component({
  selector: 'arka-industries',
  standalone: true,
  imports: [SectionHeadingComponent, IndustryCardComponent, CtaComponent, RevealDirective],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss',
})
export class IndustriesComponent {
  industries: IndustryItem[] = [
    { icon: '💻', name: 'IT / ITES' },
    { icon: '💊', name: 'Pharmaceuticals' },
    { icon: '🚗', name: 'Automotive' },
    { icon: '🛒', name: 'FMCG' },
    { icon: '📱', name: 'E-commerce' },
    { icon: '⚡', name: 'Quick-commerce' },
    { icon: '🏬', name: 'Retail' },
    { icon: '🏥', name: 'Healthcare' },
    { icon: '🏛️', name: 'Government' },
    { icon: '🏢', name: 'Corporate Services' },
  ];
}
