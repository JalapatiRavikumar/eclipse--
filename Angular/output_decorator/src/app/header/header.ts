import { Component ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  @Outpur () customeve = new EvenetEmitter();

  message = "passed to parent"

passtoparent()
  {
    this.customeve.emit(this.message)
  }

  updatemessage(data)
  {
    this.message = e.target.value;
  }

}
