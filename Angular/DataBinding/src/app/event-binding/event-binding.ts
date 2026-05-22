import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css'
})
export class EventBinding {
  counter : number = 0;
  name = "xyz"
  increment(){
    this.counter += 1;
  }

  decrement(){
    this.counter -= 1;
  }

  changeName(e:any)
  {
    // console.log(e);
    // console.log(e.target)
    // console.log(e.target.value)

    this.name = e.target.value;
  }
}
