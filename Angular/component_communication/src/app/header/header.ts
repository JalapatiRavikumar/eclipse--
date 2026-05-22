import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // mark standalone
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  // test = "demo";
  // @Input() childtitle!: string; // input from parent

  @Inpur() d1;
  @Input() d2;
}
