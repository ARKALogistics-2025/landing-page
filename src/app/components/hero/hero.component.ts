import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'arka-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  /** Swap this for your own footage by passing a different URL, e.g. <arka-hero videoUrl="/assets/videos/fleet.mp4"> */
  @Input() videoUrl = 'https://assets.mixkit.co/videos/1919/1919-720.mp4';
  @Input() posterUrl = 'https://assets.mixkit.co/videos/1919/1919-thumb-720-2.jpg';

  prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  trustIndicators = [
    { icon: '⚙️', label: 'Technology Driven' },
    { icon: '⚡', label: 'EV Focused' },
    { icon: '🕐', label: '24/7 Support' },
    { icon: '🇮🇳', label: 'Pan-India Vision' },
  ];
}
