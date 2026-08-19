import { Component } from '@angular/core';
import { SectionHeadingComponent } from '../../components/section-heading/section-heading.component';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { CtaComponent } from '../../components/cta/cta.component';
import { RevealDirective } from '../../services/reveal.directive';
import { ServiceItem } from '../../models/content.models';

@Component({
  selector: 'arka-services',
  standalone: true,
  imports: [SectionHeadingComponent, ServiceCardComponent, CtaComponent, RevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      icon: '🚛',
      title: 'Freight Transportation',
      summary: 'FTL and LTL transportation across inter-city and intra-city routes.',
      points: [
        'Time-sensitive deliveries',
        'Ad-hoc vehicle requirements',
        'Route planning & load consolidation',
        'Real-time tracking',
      ],
    },
    {
      icon: '📦',
      title: 'Last-Mile Delivery',
      summary: 'Reliable last-mile fulfilment for e-commerce, quick-commerce, retail and consumer businesses.',
      points: ['E-commerce fulfilment', 'Quick-commerce delivery', 'Retail & consumer businesses'],
    },
    {
      icon: '🏭',
      title: 'Warehousing & Fulfilment',
      summary: 'End-to-end warehousing support integrated with your supply chain.',
      points: ['Pick, pack, ship', 'Hub operations', 'Inventory movement & fulfilment support'],
    },
    {
      icon: '🚐',
      title: 'Employee Transportation',
      summary: 'Technology-enabled corporate employee transportation.',
      points: [
        'Real-time tracking & fleet management',
        'Automated scheduling & route optimization',
        'Digital reporting & billing management',
        'Safety systems, SOS & IVR confirmation',
      ],
    },
    {
      icon: '🚚',
      title: 'Dedicated Fleet',
      summary: 'Dedicated vehicles for businesses requiring regular, predictable transportation.',
      points: ['Consistent vehicle availability', 'Predictable scheduling', 'Effective fleet management'],
    },
    {
      icon: '❄️',
      title: 'Temperature-Controlled Transportation',
      summary: 'Specialized transportation for sensitive and perishable goods.',
      points: ['Pharmaceuticals', 'Healthcare products', 'Temperature-sensitive cargo'],
    },
    {
      icon: '✈️',
      title: 'Airport & Corporate Transfers',
      summary: 'Reliable transportation for business travel and special occasions.',
      points: ['Airport transfers', 'Corporate travel', 'Business events & special events'],
    },
  ];
}
