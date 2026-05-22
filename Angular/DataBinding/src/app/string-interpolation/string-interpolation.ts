import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  imports: [],
  templateUrl: './string-interpolation.html',
  styleUrl: './string-interpolation.css'
})
export class StringInterpolation {

  city:string = "Hyderabd";

  path:string = "../assets/1.png"

  cname:String = "special";

  d:string = new Date() .toLocaleTimeString();

  id = setInterval(()=>{
    this.d = new Date() .toLocaleTimeString();
  })
}
