import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'my-app',
  standalone: true,
  templateUrl: './app.html',
  imports: [CommonModule],
})
export class App {
  name = 'Ravi';

  price = 67000;

  person1 = {
    'name' : "xyz",
    'age' : 26,
    'salary' : 68000
  }

  dob = new Date();

  num = 0.98;

  company = "google"

}
