import { Component, signal, ViewChild, ElementRef,AfterViewInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  @ViewChild("test") d!: ElementRef;

  // changediv() {
  //   console.log(this.d);
  //   this.d.nativeElement.style.background = "blue"
  //   this.d.nativeElement.innerText = "hello"
  // }

  ngAfterViewInit()
  {
    this.d.nativeElement.onkeyup =() =>
      {
        console.log(this.d.nativeElement.value)
      }
    }

}
