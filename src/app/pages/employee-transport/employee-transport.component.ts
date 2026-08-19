import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { FeatureCardComponent } from '../../components/feature-card/feature-card.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { RevealDirective } from '../../services/reveal.directive';
import { FeatureItem } from '../../models/content.models';

@Component({
  selector: 'arka-employee-transport',
  standalone: true,
  imports: [SectionHeadingComponent, FeatureCardComponent, CtaComponent, RevealDirective],
  templateUrl: './employee-transport.component.html',
  styleUrl: './employee-transport.component.scss',
})
export class EmployeeTransportComponent {
  features: FeatureItem[] = [
    { icon: '📍', title: 'Real-Time Tracking', description: 'Monitor vehicles and employee transportation in real time.' },
    { icon: '🗓️', title: 'Automated Scheduling', description: 'Optimize transportation schedules and routes automatically.' },
    { icon: '🚐', title: 'Fleet Management', description: 'Centralized fleet visibility and management from one place.' },
    { icon: '🆘', title: 'SOS Support', description: 'Emergency assistance designed for faster response.' },
    { icon: '📞', title: 'IVR Confirmation', description: 'Additional safety and trip confirmation mechanisms.' },
    { icon: '🧾', title: 'Reporting & Billing', description: 'Streamlined reporting and transportation billing.' },
    { icon: '🗺️', title: 'Route Optimization', description: 'Improve efficiency and reduce unnecessary travel.' },
    { icon: '🌱', title: 'Sustainable Mobility', description: 'Support corporate sustainability goals through EV transportation.' },
  ];

  safetyPoints: string[] = [
    'Real-time vehicle tracking',
    'Driver monitoring',
    'SOS support',
    'IVR confirmation calls',
    'Secure transportation processes',
    'Fleet monitoring & route visibility',
    '24/7 support',
  ];
}
