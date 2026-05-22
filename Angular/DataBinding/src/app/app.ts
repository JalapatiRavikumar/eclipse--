import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


// export class App {
//   protected readonly title = signal('Angular');
// }


 export class App {
  x = 1;
  test()
  {
    return this.x;
  }

}

