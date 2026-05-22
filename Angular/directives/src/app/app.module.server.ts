import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { App } from './app';
import { AppModule } from './app-module';
import { serverRoutes } from './app.routes.server';

@NgModule({
  imports: [AppModule,FormsModule],
  providers: [provideServerRendering(withRoutes(serverRoutes))],
  bootstrap: [App],
})
export class AppServerModule {}
