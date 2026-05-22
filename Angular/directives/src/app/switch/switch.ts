import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: false,
  templateUrl: './switch.html',
  styleUrl: './switch.css'
})
export class Switch {
  num1 : Number = 4;
  num2 : Number = 6;

  op:string='+'

}
