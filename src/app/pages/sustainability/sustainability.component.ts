import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { FeatureCardComponent } from '../../components/feature-card/feature-card.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { RevealDirective } from '../../services/reveal.directive';
import { FeatureItem } from '../../models/content.models';

@Component({
  selector: 'arka-sustainability',
  standalone: true,
  imports: [SectionHeadingComponent, FeatureCardComponent, CtaComponent, RevealDirective],
  templateUrl: './sustainability.component.html',
  styleUrl: './sustainability.component.scss',
})
export class SustainabilityComponent {
  features: FeatureItem[] = [
    { icon: '⚡', title: 'EV Fleet Vision', description: 'Building a large EV-focused transportation network over time.' },
    { icon: '🗺️', title: 'Route Optimization', description: 'Reduce unnecessary mileage and energy consumption.' },
    { icon: '🌫️', title: 'Lower Emissions', description: "Support clients in reducing transportation-related emissions." },
    { icon: '🔋', title: 'Green Technology', description: 'Invest in low-emission vehicles and sustainable logistics technology.' },
  ];

  commitments: string[] = [
    'We aim to offer eco-friendly packaging options.',
    'We plan to provide EVs for employee transportation clients over time.',
    'We implement route planning to maximize fuel efficiency.',
    'We are building toward investment in low-emission vehicles and green technologies.',
  ];
}
