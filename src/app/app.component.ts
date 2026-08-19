import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'arka-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <arka-navbar></arka-navbar>
    <main id="main-content">
      <router-outlet></router-outlet>
    </main>
    <arka-footer></arka-footer>
  `,
  styles: [
    `
      .skip-link {
        position: absolute;
        left: -9999px;
        top: 0;
        background: var(--arka-gold);
        color: var(--arka-navy-deep);
        padding: 12px 20px;
        z-index: 10000;
        font-weight: 700;
        border-radius: 0 0 8px 0;
      }
      .skip-link:focus {
        left: 0;
      }
      main {
        min-height: 60vh;
      }
    `,
  ],
})
export class AppComponent {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private seo = inject(SeoService);

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        if (data['title']) {
          this.seo.update(data['title'], data['description'] ?? '');
        }
      });
  }
}
