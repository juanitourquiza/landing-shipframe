import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

import { I18nService, isLang } from './core/i18n/i18n.service';
import { SeoService } from './core/seo/seo.service';
import { ThemeService } from './core/theme/theme.service';
import { HeaderComponent } from './layout/header';
import { FooterComponent } from './layout/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly i18n = inject(I18nService);
  private readonly seo = inject(SeoService);
  private readonly theme = inject(ThemeService);

  constructor() {
    this.theme.init();

    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.syncFromRoute());
  }

  private syncFromRoute(): void {
    let route = this.route;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const lang = route.snapshot.data['lang'];
    if (isLang(lang)) {
      this.i18n.setLang(lang);
      this.seo.update(lang, this.i18n.content());
    }
  }
}
