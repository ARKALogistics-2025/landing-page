import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    data: {
      title: 'ARKA Logistics | Smart Logistics for a Smarter India',
      description:
        'ARKA Logistics provides technology-enabled logistics, employee transportation, freight, last-mile delivery and sustainable mobility solutions across India.',
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
    data: {
      title: 'About Us | ARKA Logistics',
      description: 'Founded in 2025, ARKA Logistics is building integrated, technology-enabled transportation solutions across India.',
    },
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then((m) => m.ServicesComponent),
    data: {
      title: 'Our Logistics Solutions | ARKA Logistics',
      description: 'Freight, last-mile delivery, warehousing, dedicated fleet, temperature-controlled and corporate transportation services.',
    },
  },
  {
    path: 'employee-transport',
    loadComponent: () =>
      import('./pages/employee-transport/employee-transport.component').then((m) => m.EmployeeTransportComponent),
    data: {
      title: 'Employee Transportation | ARKA Logistics',
      description: 'Technology-enabled corporate employee transportation designed around safety, reliability and employee experience.',
    },
  },
  {
    path: 'technology',
    loadComponent: () => import('./pages/technology/technology.component').then((m) => m.TechnologyComponent),
    data: {
      title: 'Technology | ARKA Logistics',
      description: 'Real-time tracking, GPS/GPRS monitoring, fleet intelligence and route optimization technology.',
    },
  },
  {
    path: 'sustainability',
    loadComponent: () =>
      import('./pages/sustainability/sustainability.component').then((m) => m.SustainabilityComponent),
    data: {
      title: 'Sustainability | ARKA Logistics',
      description: 'ARKA Logistics is pivoting toward EV-based transportation to support a greener, more sustainable India.',
    },
  },
  {
    path: 'industries',
    loadComponent: () => import('./pages/industries/industries.component').then((m) => m.IndustriesComponent),
    data: {
      title: 'Industries We Serve | ARKA Logistics',
      description: 'Serving IT/ITES, pharmaceuticals, automotive, FMCG, e-commerce, quick-commerce, retail and more.',
    },
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
    data: {
      title: 'Contact Us | ARKA Logistics',
      description: 'Get in touch with ARKA Logistics for freight, employee transportation and logistics solutions.',
    },
  },
  { path: '**', redirectTo: '' },
];
