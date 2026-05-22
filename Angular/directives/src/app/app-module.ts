import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgIfWithElse } from './ng-if-with-else/ng-if-with-else';
import { NgFor } from './ng-for/ng-for';
import { Switch } from './switch/switch';

@NgModule({
  declarations: [
    App,
    NgIfWithElse,
    NgFor,
    Switch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
