import { Component } from '@angular/core';
import { Header } from './header'; // import your header component

@Component({
  selector: 'app-root',
  standalone: true, // mark it as standalone
  imports: [Header], // include Header component
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // title = "app-root";
  // ctitle = "Header Component"; // this will be passed to Header


  data = "this is demo of input decorator"
  parr = [10,20,30,40,50]


  data1 = "this is demo of input decorator"
  parr1 = [100,200,300,400,500]
}
