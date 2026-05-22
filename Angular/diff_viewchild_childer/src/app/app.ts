import { Component, ElementRef, signal, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  @ViewChild('para') p!: ElementRef;

  @ViewChildren('heading') h!: QueryList<ElementRef>;

  test() {
    console.log(this.p.nativeElement.innerText);
    for (let ele of this.h) {
      console.log(ele.nativeElement.innerText);
    }
  }
}
