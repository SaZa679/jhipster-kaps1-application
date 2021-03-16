import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterKaps1ApplicationSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [JhipsterKaps1ApplicationSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class JhipsterKaps1ApplicationHomeModule {}
