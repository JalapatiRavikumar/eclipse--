import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet], // only if you use <router-outlet>
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // must be styleUrls, not styleUrl
})
export class App {
  email = "";

  updateEmail(ip: any) {
    this.email = ip.value;
  }
}
