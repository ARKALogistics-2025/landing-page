import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { HeroComponent } from '../../components/hero/hero.component';
import { StatsComponent } from '../../components/stats/stats.component';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { FeatureCardComponent } from '../../components/feature-card/feature-card.component';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { IndustryCardComponent } from '../../components/industry-card/industry-card.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { RevealDirective } from '../../services/reveal.directive';
import { FeatureItem, IndustryItem, ServiceItem } from '../../models/content.models';

@Component({
  selector: 'arka-home',
  standalone: true,
  imports: [
    RouterLink,
    HeroComponent,
    StatsComponent,
    SectionHeadingComponent,
    FeatureCardComponent,
    ServiceCardComponent,
    IndustryCardComponent,
    CtaComponent,
    RevealDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  highlights: FeatureItem[] = [
    { icon: '🤝', title: 'Client First', description: 'A client-first philosophy at the core of our operations.' },
    { icon: '⚙️', title: 'Technology Driven', description: 'Integration of modern transportation and tracking technologies.' },
    { icon: '🌱', title: 'Sustainable', description: 'Strong commitment to environmental responsibility.' },
    { icon: '⚡', title: 'EV First', description: 'Long-term vision to build a large EV-based transportation fleet.' },
    { icon: '🛡️', title: 'Reliable', description: 'Focus on dependable and on-time transportation.' },
    { icon: '📈', title: 'Scalable', description: 'Designed to support growing enterprise transportation requirements.' },
  ];

  featuredServices: ServiceItem[] = [
    {
      icon: '🚛',
      title: 'Freight Transportation',
      summary: 'FTL and LTL transportation across inter-city and intra-city routes.',
      points: ['Time-sensitive deliveries', 'Route planning & load consolidation', 'Real-time tracking'],
    },
    {
      icon: '📦',
      title: 'Last-Mile Delivery',
      summary: 'Reliable last-mile fulfilment for e-commerce, quick-commerce and retail.',
      points: ['E-commerce & quick-commerce', 'Retail & consumer businesses', 'Seamless supply chain integration'],
    },
    {
      icon: '🚐',
      title: 'Employee Transportation',
      summary: 'Technology-enabled corporate employee transportation.',
      points: ['Real-time tracking & SOS support', 'Automated scheduling', 'Route optimization'],
    },
  ];

  industries: IndustryItem[] = [
    { icon: '💻', name: 'IT / ITES' },
    { icon: '💊', name: 'Pharmaceuticals' },
    { icon: '🚗', name: 'Automotive' },
    { icon: '🛒', name: 'FMCG' },
    { icon: '📱', name: 'E-commerce' },
    { icon: '⚡', name: 'Quick-commerce' },
    { icon: '🏬', name: 'Retail' },
    { icon: '🏛️', name: 'Government' },
  ];

  differentiators: FeatureItem[] = [
    { icon: '🎯', title: 'Personalized Logistics', description: 'Strategies aligned with individual client requirements.' },
    { icon: '💡', title: 'Innovative Technology', description: 'Technology-enabled transportation management.' },
    { icon: '✅', title: 'Consistent Performance', description: 'Focus on reliable and timely transportation.' },
    { icon: '🌿', title: 'Sustainable Mobility', description: 'EV-focused transportation solutions.' },
  ];
}
