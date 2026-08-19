import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { FeatureCardComponent } from '../../components/feature-card/feature-card.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { RevealDirective } from '../../services/reveal.directive';
import { FeatureItem } from '../../models/content.models';

@Component({
  selector: 'arka-technology',
  standalone: true,
  imports: [SectionHeadingComponent, FeatureCardComponent, CtaComponent, RevealDirective],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
})
export class TechnologyComponent {
  features: FeatureItem[] = [
    { icon: '📡', title: 'Real-Time Tracking', description: 'Live fleet visibility across every active route.' },
    { icon: '🛰️', title: 'GPS / GPRS Tracking', description: 'Vehicle monitoring and location visibility.' },
    { icon: '🔒', title: 'Digital Lock / Security', description: 'Technology-enabled cargo security.' },
    { icon: '📊', title: 'Fleet Intelligence', description: 'Operational data for better fleet decisions.' },
    { icon: '🗺️', title: 'Route Optimization', description: 'Improve route efficiency and transportation planning.' },
    { icon: '📈', title: 'Automated Reporting', description: 'Better operational visibility for every stakeholder.' },
  ];
}
