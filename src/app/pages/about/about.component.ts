import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { FeatureCardComponent } from '../../components/feature-card/feature-card.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { RevealDirective } from '../../services/reveal.directive';
import { FeatureItem } from '../../models/content.models';

@Component({
  selector: 'arka-about',
  standalone: true,
  imports: [RouterLink, SectionHeadingComponent, FeatureCardComponent, CtaComponent, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  whyChoose: FeatureItem[] = [
    { icon: '📊', title: 'Proven Demand', description: 'Enterprise-focused transportation opportunities with growing client interest.' },
    { icon: '🧩', title: 'Diversified Services', description: 'E-commerce, quick-commerce, freight and employee transportation under one partner.' },
    { icon: '📡', title: 'Technology Enabled', description: 'Real-time tracking and digital fleet management built into our operating model.' },
    { icon: '⚡', title: 'EV Positioning', description: 'Long-term sustainable transportation strategy centered on EV adoption.' },
    { icon: '💰', title: 'Capital Efficient', description: 'Focus on scalable infrastructure and disciplined expansion.' },
    { icon: '🤝', title: 'Client First', description: 'Solutions designed around each client\u2019s specific business requirements.' },
  ];

  growthCards = [
    { label: 'Current Capacity', value: '~₹1 Cr annualized', tag: 'Management estimate' },
    { label: 'Growth Target', value: '~₹3 Cr annualized capacity', tag: 'Target' },
    { label: 'Expansion Horizon', value: '18–24 months', tag: 'Projected' },
    { label: 'Funding Requirement', value: '₹1 Cr', tag: 'Requirement' },
  ];
}
