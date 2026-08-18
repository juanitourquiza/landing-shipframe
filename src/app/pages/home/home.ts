import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero';
import { TrustComponent } from '../../sections/trust';
import { LifecycleComponent } from '../../sections/lifecycle';
import { ProblemComponent } from '../../sections/problem';
import { FeaturesComponent } from '../../sections/features';
import { InstallComponent } from '../../sections/install';
import { AudienceComponent } from '../../sections/audience';
import { FaqComponent } from '../../sections/faq';
import { CtaComponent } from '../../sections/cta';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeroComponent,
    TrustComponent,
    LifecycleComponent,
    ProblemComponent,
    FeaturesComponent,
    InstallComponent,
    AudienceComponent,
    FaqComponent,
    CtaComponent,
  ],
  template: `
    <app-hero />
    <app-trust />
    <app-lifecycle />
    <app-problem />
    <app-features />
    <app-install />
    <app-audience />
    <app-faq />
    <app-cta />
  `,
})
export class Home {}
