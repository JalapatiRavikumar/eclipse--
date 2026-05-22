import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestPipe } from './test.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  //wish = "hello good morning";

  person = {"name" : "chinni", "gender" : "female"}
  wish = "good evening"
}
