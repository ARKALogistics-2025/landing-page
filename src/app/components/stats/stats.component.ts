import { Component } from '@angular/core';
import { CounterDirective } from '../../services/counter.directive';
import { StatItem } from '../../models/content.models';

@Component({
  selector: 'arka-stats',
  standalone: true,
  imports: [CounterDirective],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  stats: StatItem[] = [
    { value: 99.9, decimals: 1, suffix: '%', label: 'Fleet & service reliability target', isGoal: true },
    { value: 24, decimals: 0, suffix: '/7', label: 'Customer support', isGoal: false },
    { value: 0, decimals: 0, suffix: '', label: 'Pan-India coverage vision', isGoal: true },
    { value: 0, decimals: 0, suffix: '', label: 'EV-first sustainable mobility', isGoal: true },
  ];
}
