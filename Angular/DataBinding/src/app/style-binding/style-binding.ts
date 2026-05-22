import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  imports: [],
  templateUrl: './style-binding.html',
  styleUrl: './style-binding.css'
})
export class StyleBinding {

  // cvar:string = 'blue'

  mystyle:object = {
    color : 'green',
    background : 'grey',
    border :'5px soild blue'
  }

}
