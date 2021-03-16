import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterKaps1ApplicationSharedModule } from 'app/shared/shared.module';
import { JhipsterKaps1ApplicationCoreModule } from 'app/core/core.module';
import { JhipsterKaps1ApplicationAppRoutingModule } from './app-routing.module';
import { JhipsterKaps1ApplicationHomeModule } from './home/home.module';
import { JhipsterKaps1ApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterKaps1ApplicationSharedModule,
    JhipsterKaps1ApplicationCoreModule,
    JhipsterKaps1ApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterKaps1ApplicationEntityModule,
    JhipsterKaps1ApplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterKaps1ApplicationAppModule {}
