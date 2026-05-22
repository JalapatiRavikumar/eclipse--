import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template:  `
  <header>header works</header>
  <app-header></app-header>`,

  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('DemoApp');
}
